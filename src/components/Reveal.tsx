import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

type Props = {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  as?: ElementType
  className?: string
}

export default function Reveal({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const Tag = as as any
  const cls = `reveal ${delay ? `reveal--d${delay}` : ''} ${visible ? 'is-visible' : ''} ${className}`.trim()
  return <Tag ref={ref} className={cls}>{children}</Tag>
}
