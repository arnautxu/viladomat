import GrainBackground from './components/GrainBackground'
import Reveal from './components/Reveal'
import Cursor from './components/Cursor'
import { services, clients, stats } from './data'

export default function App() {
  return (
    <div className="app">
      <Cursor />

      <nav className="nav">
        <a href="#top" className="nav__brand">
          Viladomat<sup>SL</sup>
        </a>
        <div className="nav__links">
          <a href="#serveis">Serveis</a>
          <a href="#nosaltres">Nosaltres</a>
          <a href="#clients">Clients</a>
          <a href="#contacte">Contacte</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <GrainBackground />
        <div className="shell hero__inner">
          <Reveal delay={1}>
            <div className="hero__eyebrow">Serveis Gràfics i Maquetació · Des de fa 30 anys</div>
          </Reveal>
          <Reveal as="h1" className="hero__title" delay={2}>
            Tinta, paper<br />
            i un <em>horari</em><span className="accent">.</span>
          </Reveal>
          <Reveal>
            <dl className="hero__meta">
              <div>
                <dt>Filosofia</dt>
                <dd>El vostre horari és el nostre horari. Servei personalitzat, visites a peu d’obra i resposta immediata.</dd>
              </div>
              <div>
                <dt>Especialitat</dt>
                <dd>Maquetació editorial, impressió digital i offset, vinils i retolació.</dd>
              </div>
              <div>
                <dt>Localització</dt>
                <dd>Catalunya — atenem clients d’arreu del territori.</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              Maquetació editorial · Impressió digital · Offset · Vinils · Retolació · Xarxes socials ·{' '}
            </span>
          ))}
        </div>
      </div>

      <section id="serveis" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">01 — Serveis</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Tot el que la <em>impremta</em> pot oferir.
            </Reveal>
          </div>
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.italic} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="service">
                  <div className="service__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="service__name">
                    {s.name} <em>{s.italic}</em>
                  </div>
                  <div className="service__desc">{s.desc}</div>
                  <div className="service__arrow">→</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="nosaltres" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">02 — Nosaltres</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Una tradició <em>viva</em>.
            </Reveal>
          </div>
          <div className="about">
            <Reveal as="p" className="about__lead">
              Tres dècades dedicades a la <em>maquetació</em> i la <em>impressió</em>, amb un compromís senzill: <span className="accent">resposta immediata</span> i excel·lent relació qualitat-preu.
            </Reveal>
            <Reveal delay={2}>
              <div className="about__body">
                <p>
                  Viladomat Serveis Gràfics i Maquetació, S.L. neix de l’experiència acumulada en el sector editorial i de la impressió. Treballem cada projecte amb la cura i atenció que mereix —des de la composició de pàgines fins a l’acabat final.
                </p>
                <p>
                  Visitem el client a peu d’obra, ens adaptem a les seves urgències i lliurem amb la rapidesa que el mercat exigeix. Sense intermediaris, sense excuses.
                </p>
              </div>
            </Reveal>
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
                  <div>
                    <div className="stat__num">
                      {s.num}<em>{s.italic}</em>
                    </div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="section" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">03 — Clients</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Confien en <em>nosaltres</em>.
            </Reveal>
          </div>
        </div>
        <div className="shell">
          <div className="clients">
            {clients.map((c, i) => (
              <Reveal key={c} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="client">{c}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="shell">
          <Reveal>
            <span className="quote__mark">“</span>
          </Reveal>
          <Reveal as="p" className="quote__text" delay={1}>
            Perquè el vostre horari, és el nostre horari.
          </Reveal>
          <Reveal as="div" className="quote__author" delay={2}>
            — Francesc Pugibet Viladomat
          </Reveal>
        </div>
      </section>

      <section id="contacte" className="contact">
        <div className="shell">
          <Reveal as="div" className="section__num">04 — Contacte</Reveal>
          <Reveal as="h2" className="contact__title" delay={1}>
            Parlem de <em>tinta</em>.
          </Reveal>
          <dl className="contact__grid">
            <Reveal delay={1}>
              <div className="contact__item">
                <dt>Email</dt>
                <dd><a href="mailto:info@viladomatserveis.com">info@viladomatserveis.com</a></dd>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="contact__item">
                <dt>Web original</dt>
                <dd><a href="https://www.viladomatserveis.com" target="_blank" rel="noreferrer">viladomatserveis.com ↗</a></dd>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="contact__item">
                <dt>Horari</dt>
                <dd>El vostre horari, el nostre horari</dd>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="contact__item">
                <dt>Social</dt>
                <dd>
                  <a href="#" aria-label="Instagram">Instagram</a><br />
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <div>© {new Date().getFullYear()} Viladomat Serveis Gràfics i Maquetació, S.L.</div>
          <div>Catalunya · Spain</div>
        </div>
      </footer>
    </div>
  )
}
