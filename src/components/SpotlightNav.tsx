import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Serveis',   href: '#serveis' },
  { label: 'Nosaltres', href: '#nosaltres' },
  { label: 'Clients',   href: '#clients' },
  { label: 'Contacte',  href: '#contacte' },
]

export default function SpotlightNav() {
  const navRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoverX, setHoverX] = useState<number | null>(null)
  const spotlightX = useRef(0)
  const ambienceX = useRef(0)

  // Scroll-based active section detection
  useEffect(() => {
    const ids = NAV_ITEMS.map(i => i.href.slice(1))
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.35 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Mouse spotlight
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect()
      const x = e.clientX - rect.left
      setHoverX(x)
      spotlightX.current = x
      nav.style.setProperty('--spotlight-x', `${x}px`)
    }

    const onLeave = () => {
      setHoverX(null)
      const activeEl = nav.querySelector(`[data-idx="${activeIndex}"]`) as HTMLElement | null
      if (activeEl) {
        const nr = nav.getBoundingClientRect()
        const ir = activeEl.getBoundingClientRect()
        const target = ir.left - nr.left + ir.width / 2
        animate(spotlightX.current, target, {
          type: 'spring', stiffness: 200, damping: 20,
          onUpdate: v => {
            spotlightX.current = v
            nav.style.setProperty('--spotlight-x', `${v}px`)
          },
        })
      }
    }

    nav.addEventListener('mousemove', onMove)
    nav.addEventListener('mouseleave', onLeave)
    return () => {
      nav.removeEventListener('mousemove', onMove)
      nav.removeEventListener('mouseleave', onLeave)
    }
  }, [activeIndex])

  // Ambience follows active item
  useEffect(() => {
    const nav = navRef.current
    if (!nav || activeIndex === null) return
    const activeEl = nav.querySelector(`[data-idx="${activeIndex}"]`) as HTMLElement | null
    if (!activeEl) return
    const nr = nav.getBoundingClientRect()
    const ir = activeEl.getBoundingClientRect()
    const target = ir.left - nr.left + ir.width / 2
    animate(ambienceX.current, target, {
      type: 'spring', stiffness: 200, damping: 20,
      onUpdate: v => {
        ambienceX.current = v
        nav.style.setProperty('--ambience-x', `${v}px`)
      },
    })
  }, [activeIndex])

  return (
    <nav ref={navRef} className="spotlight-nav" aria-label="Navegació principal">
      <ul className="spotlight-nav__list">
        {NAV_ITEMS.map((item, idx) => (
          <li key={item.href}>
            <a
              href={item.href}
              data-idx={idx}
              className={`spotlight-nav__link${activeIndex === idx ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mouse spotlight */}
      <div
        className="spotlight-nav__light spotlight-nav__light--spot"
        style={{ opacity: hoverX !== null ? 1 : 0 }}
        aria-hidden
      />

      {/* Active ambience line */}
      <div className="spotlight-nav__light spotlight-nav__light--ambience" aria-hidden />

      {/* Bottom track */}
      <div className="spotlight-nav__track" aria-hidden />
    </nav>
  )
}
