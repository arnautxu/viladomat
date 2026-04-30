import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x, ty = y
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.classList.add('is-active')
    }
    const onLeave = () => el.classList.remove('is-active')
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const interactive = t.closest('a, button, .service, .client')
      if (interactive) {
        el.style.width = '40px'
        el.style.height = '40px'
      } else {
        el.style.width = '12px'
        el.style.height = '12px'
      }
    }

    const tick = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <div ref={ref} className="cursor-dot" aria-hidden />
}
