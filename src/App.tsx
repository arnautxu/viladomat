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

      {/*
        HERO — Titular: marca + promesa + notícia (Ogilvy).
        Promesa única: 4 dies, anem fins a vosaltres, horari vostre.
      */}
      <header id="top" className="hero">
        <GrainBackground />
        <div className="shell hero__inner">
          <Reveal delay={1}>
            <div className="hero__eyebrow">
              Impressió · Maquetació · Retolació · Catalunya
            </div>
          </Reveal>
          <Reveal as="h1" className="hero__title" delay={2}>
            Viladomat <em>lliura</em><br />
            en 4 dies<span className="accent">.</span>
          </Reveal>
          <Reveal>
            <dl className="hero__meta">
              <div>
                <dt>La promesa</dt>
                <dd>
                  Anem fins a vosaltres, treballem amb el vostre horari i lliurem
                  en un màxim de 4 dies. Sense intermediaris. Sense excuses.
                </dd>
              </div>
              <div>
                <dt>Què fem</dt>
                <dd>
                  Maquetació editorial, impressió digital i offset, vinils,
                  retolació i continguts per a xarxes socials.
                </dd>
              </div>
              <div>
                <dt>Per a qui</dt>
                <dd>
                  Empreses catalanes que necessiten qualitat, rapidesa i un
                  soci que respon quan els altres no ho fan.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              Lliurament en 4 dies · Visitem el client · Maquetació editorial · Impressió digital · Offset · Vinils · Retolació · Xarxes socials ·{' '}
            </span>
          ))}
        </div>
      </div>

      {/*
        SERVEIS — Titular que promet un benefici real, no una descripció.
        Cada servei: benefici primer, feature després.
      */}
      <section id="serveis" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">01 — Serveis</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Cinc maneres de fer <em>créixer</em> el vostre negoci.
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

      {/*
        NOSALTRES — Fets que proven l'expertesa. No poesia.
        Prova: 30 anys, visita a peu d'obra, cap intermediari.
      */}
      <section id="nosaltres" className="section">
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">02 — Nosaltres</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Per què les millors empreses de Catalunya <em>repeten</em>.
            </Reveal>
          </div>
          <div className="about">
            <Reveal as="p" className="about__lead">
              Trenta anys al sector gràfic ensenyen una cosa: el client no vol
              excuses, vol <em>resultats</em>. Per això anem fins a vosaltres,
              adaptem el nostre horari al vostre i <span className="accent">lliurem en 4 dies</span>.
            </Reveal>
            <Reveal delay={2}>
              <div className="about__body">
                <p>
                  Viladomat Serveis Gràfics i Maquetació, S.L. no és una
                  impremta industrial. Treballem directament amb el client,
                  sense capes, sense demores, sense trucades que no responen.
                  Francesc Pugibet Viladomat fundà l'empresa fa més de deu
                  anys partint de tres dècades d'experiència en maquetació
                  editorial i impressió.
                </p>
                <p>
                  Visitem cada client a peu d'obra. Revisem els originals,
                  detectem els errors abans d'imprimir i lliurem el producte
                  final amb la qualitat que mereixeu. L'excel·lent relació
                  qualitat-preu no és un eslògan: és el motiu pel qual els
                  nostres clients porten anys tornant.
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

      {/*
        CLIENTS — Prova social. Noms reconeguts = credibilitat immediata.
        El titular reformula com a prova de qualitat.
      */}
      <section id="clients" className="section" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="section__head">
            <Reveal as="div" className="section__num">03 — Clients</Reveal>
            <Reveal as="h2" className="section__title" delay={1}>
              Empreses que van voler el millor.<br /><em>Ens van triar a nosaltres.</em>
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

      {/*
        QUOTE — Testimoni autèntic del fundador.
        Ogilvy: els testimonis creïbles i rellevants funcionen sempre.
      */}
      <section className="quote">
        <div className="shell">
          <Reveal>
            <span className="quote__mark">"</span>
          </Reveal>
          <Reveal as="p" className="quote__text" delay={1}>
            Perquè el vostre horari, és el nostre horari.
          </Reveal>
          <Reveal as="div" className="quote__author" delay={2}>
            — Francesc Pugibet Viladomat, fundador
          </Reveal>
        </div>
      </section>

      {/*
        CONTACTE — CTA directe. Promesa d'acció immediata.
        Ogilvy: el moment del contacte és quan el client decideix.
        El titular promet una resposta, no una conversa poètica.
      */}
      <section id="contacte" className="contact">
        <div className="shell">
          <Reveal as="div" className="section__num">04 — Contacte</Reveal>
          <Reveal as="h2" className="contact__title" delay={1}>
            Digueu-nos quan <em>voleu</em>.<br />Respondrem avui.
          </Reveal>
          <dl className="contact__grid">
            <Reveal delay={1}>
              <div className="contact__item">
                <dt>Escriviu-nos</dt>
                <dd>
                  <a href="mailto:info@viladomatserveis.com">
                    info@viladomatserveis.com
                  </a>
                </dd>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="contact__item">
                <dt>Visita al vostre local</dt>
                <dd>Us venim a veure. Digueu quan i on.</dd>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="contact__item">
                <dt>Horari</dt>
                <dd>El vostre horari és el nostre horari. Sense excepcions.</dd>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="contact__item">
                <dt>Seguiu-nos</dt>
                <dd>
                  <a href="https://www.viladomatserveis.com" target="_blank" rel="noreferrer">
                    viladomatserveis.com ↗
                  </a>
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <div>© {new Date().getFullYear()} Viladomat Serveis Gràfics i Maquetació, S.L.</div>
          <div>Catalunya · Impressió · Maquetació · Retolació</div>
        </div>
      </footer>
    </div>
  )
}
