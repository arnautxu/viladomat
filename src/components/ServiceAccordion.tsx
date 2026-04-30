import { useState } from 'react'
import Reveal from './Reveal'

type Service = { readonly name: string; readonly italic: string; readonly desc: string }
type Props = { services: readonly Service[] }

export default function ServiceAccordion({ services }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="services">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <Reveal key={s.italic} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
            <div
              className={`service ${isOpen ? 'service--open' : ''}`}
              onClick={() => setOpen(isOpen ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="service__top">
                <div className="service__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="service__name">
                  {s.name} <em>{s.italic}</em>
                </div>
                <div className="service__arrow" aria-hidden>
                  <span className="service__arrow-inner">{isOpen ? '↑' : '→'}</span>
                </div>
              </div>
              <div className="service__body">
                <div className="service__body-inner">
                  <p className="service__desc">{s.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
