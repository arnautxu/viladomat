import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const frag = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uMouse;

  // 2D noise
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * vec2(uRes.x / uRes.y, 1.0);
    vec2 m = uMouse * vec2(uRes.x / uRes.y, 1.0);

    // slow drifting field
    float t = uTime * 0.04;
    float n = fbm(p * 1.6 + vec2(t, t * 0.7));
    n += 0.4 * fbm(p * 4.0 - vec2(t * 1.3, t));

    // soft mouse warp
    float md = distance(p, m);
    float mInf = smoothstep(0.7, 0.0, md);
    n += mInf * 0.18;

    // dark ink colors — warm near-black with subtle variance
    vec3 base  = vec3(0.036, 0.033, 0.030);
    vec3 shade = vec3(0.060, 0.054, 0.046);
    vec3 accent = vec3(1.0, 0.231, 0.122);

    vec3 col = mix(base, shade, smoothstep(0.3, 0.72, n));

    // warm accent ember near mouse
    col = mix(col, accent * 0.18, mInf * 0.4);

    // vignette — edges go slightly lighter to frame content
    float v = smoothstep(0.3, 1.1, length(uv - 0.5));
    col += shade * v * 0.35;

    // subtle film grain (finer on dark)
    float g = (hash(uv * uRes + uTime) - 0.5) * 0.028;
    col += g;

    // clamp to prevent banding
    col = clamp(col, 0.0, 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function GrainBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = ref.current
    if (!mount) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    const w = mount.clientWidth
    const h = mount.clientHeight
    renderer.setSize(w, h)
    mount.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(w, h) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }
    const mat = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms,
    })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat)
    scene.add(mesh)

    let raf = 0
    let target = { x: 0.5, y: 0.5 }
    let cur = { x: 0.5, y: 0.5 }

    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect()
      target.x = (e.clientX - rect.left) / rect.width
      target.y = 1.0 - (e.clientY - rect.top) / rect.height
    }
    window.addEventListener('mousemove', onMove)

    const onResize = () => {
      const W = mount.clientWidth
      const H = mount.clientHeight
      renderer.setSize(W, H)
      uniforms.uRes.value.set(W, H)
    }
    window.addEventListener('resize', onResize)

    const start = performance.now()
    const tick = () => {
      const now = performance.now()
      uniforms.uTime.value = (now - start) / 1000
      cur.x += (target.x - cur.x) * 0.06
      cur.y += (target.y - cur.y) * 0.06
      uniforms.uMouse.value.set(cur.x, cur.y)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      mat.dispose()
      mesh.geometry.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={ref} className="hero__canvas" aria-hidden />
}
