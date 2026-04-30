import GradientBlinds from './components/GradientBlinds'
import Reveal from './components/Reveal'
import Cursor from './components/Cursor'
import ServiceAccordion from './components/ServiceAccordion'
import StatCounter from './components/StatCounter'
import SpotlightNav from './components/SpotlightNav'
import { IconInstagram, IconPhone } from './components/Icons'
import { services, clients, webService } from './data'

export default function App() {
  return (
    <div className="app">
      <Cursor />

      <div className="nav">
        <a href="#top" className="nav__brand">Viladomat<sup>SL</sup></a>
        <div className="nav__right">
          <SpotlightNav />
          <div className="nav__icons">
            <a href="tel:+34617206470" className="nav__icon" aria-label="Trucar">
              <IconPhone />
            </a>
            <a href="https://www.instagram.com/viladomat_serveis_grafics/" target="_blank" rel="noreferrer" className="nav__icon" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>

      <header id="top" className="hero">
        <GradientBlinds
          gradientColors={['#0a0a0a', '#160503', '#2e0905', '#ff3b1f', '#2e0905', '#160503', '#0a0a0a']}
          angle={0}
          noise={0.18}
          blindCount={12}
          blindMinWidth={90}
          spotlightRadius={0.55}
          spotlightSoftness={1.1}
          spotlightOpacity={0.9}
          mouseDampening={0.14}
          mirrorGradient={false}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__deco" aria-hidden>V</div>
        <div className="shell hero__inner">
          <Reveal delay={1}>
            <div className="hero__eyebrow">Impressió · Maquetació · Retolació · Catalunya</div>
          </Reveal>
          <Reveal as="h1" className="hero__title" delay={2}>
            Viladomat <em>lliura</em><br />
            en 4 dies<span className="accent">.</span>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero__cta">
              <a href="#contacte" className="cta-primary">
                Escriviu-nos avui <span aria-hidden>→</span>
              </a>
              <a href="#serveis" className="cta-ghost">Veure serveis</a>
            </div>
          </Reveal>
          <Reveal>
            <dl className="hero__meta">
              <div>
                <dt>La promesa</dt>
                <dd>Anem fins a vosaltres. El vostre horari, el nostre horari.</dd>
              </div>
              <div>
                <dt>Què fem</dt>
                <dd>Maquetació · Impressió digital i offset · Vinils · Web</dd>
              </div>
              <div>
                <dt>Per a qui</dt>
                <dd>Empreses catalanes que necessiten qualitat i rapidesa.</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              4 dies · Visitem el client · Maquetació · Impressió digital · Offset · Vinils · Retolació · Webs ·{' '}
            </span>
          ))}
        </div>
      </div>

      <section id="serveis" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">01 — Serveis</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Sis maneres de fer<br /><em>créixer</em> el vostre negoci.
            </Reveal>
          </div>

          <ServiceAccordion services={services} />

          <Reveal delay={1}>
            <div className="service-web">
              <div className="service-web__header">
                <span className="service-web__badge">{webService.badge}</span>
                <span className="service-web__num">{webService.num}</span>
              </div>
              <div className="service-web__body">
                <div className="service-web__left">
                  <h3 className="service-web__name">
                    {webService.name}<br /><em>{webService.italic}</em>
                  </h3>
                  <p className="service-web__desc">{webService.desc}</p>
                  <p className="service-web__promise">{webService.promise}</p>
                </div>
                <div className="service-web__right">
                  <ul className="service-web__tags">
                    {webService.tags.map(tag => (
                      <li key={tag} className="service-web__tag">{tag}</li>
                    ))}
                  </ul>
                  <div className="service-web__cta">
                    <a href="#contacte" className="service-web__cta-link">
                      Parleu-nos-en <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nosaltres" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">02 — Nosaltres</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Per què les millors empreses<br />de Catalunya <em>sempre tornen</em>.
            </Reveal>
          </div>
          <div className="about">
            <Reveal as="p" className="about__lead">
              Trenta anys al sector ensenyen una cosa: el client vol <em>resultats</em>, no excuses.
              Per això anem fins a vosaltres i <span className="accent">lliurem en 4 dies</span>.
            </Reveal>
            <div className="stats">
              <Reveal delay={1}>
                <div>
                  <div className="stat__num">
                    <StatCounter to={30} suffix="+" />
                  </div>
                  <div className="stat__label">Anys d'experiència</div>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div>
                  <div className="stat__num">
                    <StatCounter to={4} suffix="d" duration={900} />
                  </div>
                  <div className="stat__label">Lliurament màxim</div>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div>
                  <div className="stat__num">
                    <StatCounter to={0} suffix="*" />
                  </div>
                  <div className="stat__label">Intermediaris. Mai.</div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <a href="#contacte" className="cta-text">
                Expliqueu-nos el vostre projecte <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="clients" className="section" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">03 — Clients</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Van voler el millor.<br /><em>Ens van triar.</em>
            </Reveal>
          </div>
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
          <Reveal><span className="quote__mark">"</span></Reveal>
          <Reveal as="p" className="quote__text" delay={1}>
            Perquè el vostre horari, és el nostre horari.
          </Reveal>
          <Reveal as="div" className="quote__author" delay={2}>
            — Francesc Pugibet Viladomat, fundador
          </Reveal>
        </div>
      </section>

      <section id="contacte" className="contact">
        <div className="shell">
          <Reveal as="div" className="section__num">04 — Contacte</Reveal>
          <Reveal as="h2" className="contact__title" delay={1}>
            Digueu-nos quan <em>voleu</em>.<br />Respondrem avui.
          </Reveal>
          <dl className="contact__grid">
            <Reveal delay={1}>
              <div className="contact__item">
                <dt>Telèfon</dt>
                <dd><a href="tel:+34617206470">617 20 64 70</a></dd>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="contact__item">
                <dt>Email</dt>
                <dd><a href="mailto:fpugibet@me.com">fpugibet@me.com</a></dd>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="contact__item">
                <dt>Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com/viladomat_serveis_grafics/" target="_blank" rel="noreferrer">
                    @viladomat_serveis_grafics ↗
                  </a>
                </dd>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="contact__item">
                <dt>Visita</dt>
                <dd>Us venim a veure. Digueu quan i on.</dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <div>© {new Date().getFullYear()} Viladomat Serveis Gràfics i Maquetació, S.L.</div>
          <div className="footer__icons">
            <a href="tel:+34617206470" className="footer__icon" aria-label="Trucar">
              <IconPhone size={16} />
              <span>617 20 64 70</span>
            </a>
            <a href="https://www.instagram.com/viladomat_serveis_grafics/" target="_blank" rel="noreferrer" className="footer__icon" aria-label="Instagram">
              <IconInstagram size={16} />
              <span>@viladomat_serveis_grafics</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
