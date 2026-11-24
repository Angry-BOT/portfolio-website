import PortfolioAssistant from "./portfolio-assistant";
import PortfolioInteractions from "./portfolio-interactions";
import HyderabadTime from "./hyderabad-time";
import PortfolioIcon from "./portfolio-icon";
import ThemeToggle from "./theme-toggle";
import { resumeUrl, tCrawlOutcome } from "./assistant-content";

const shortcuts = [
  { label: "Work", icon: "work", href: "#ind-project-index" },
  { label: "GitHub", icon: "github", href: "https://github.com/Angry-BOT" },
  { label: "Email", icon: "email", href: "mailto:shailo199925@gmail.com" },
  { label: "LinkedIn", icon: "linkedin", href: "https://in.linkedin.com/in/shaileshdas12" },
];

function Header() {
  return (
    <header className="ind-head ind-shell">
      <a className="ind-mark" href="#ind-home" aria-label="Shailesh Das, home"><span className="ind-wordmark-text" aria-hidden="true">SHAILESH DAS</span><span className="ind-logo" aria-hidden="true">S<i></i>D</span></a>
      <nav className="ind-navigation" aria-label="Portfolio">
        <div className="ind-nav-links">
          <a href="#ind-project-index">Work</a>
          <a href="#ind-about">About</a>
          <a href="#ind-contact">Contact</a>
        </div>
        <a className="ind-quick-contact" href="#ind-contact" inert><img src="/portfolio/shailesh-das-185966a.jpg" alt="" />{"Let’s talk "}<span aria-hidden="true">↗</span></a>
        <ThemeToggle />
      </nav>
      <div className="ind-utility">
        <p><span>Hyderabad</span><HyderabadTime /></p>
        <a className="ind-resume" href={resumeUrl}><PortfolioIcon name="document" />Résumé <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="ind-hero ind-shell" aria-labelledby="ind-title">
      <div className="ind-ambient" aria-hidden="true"></div>
      <div className="ind-profile">
        <button type="button" className="ind-profile-trigger" aria-label="Shailesh Das, profile links" aria-expanded="false" aria-controls="ind-profile-links">
          <img className="ind-portrait" src="/portfolio/shailesh-das-185966a.jpg" width="152" height="176" alt="" />
          <span className="ind-online" aria-hidden="true"></span>
        </button>
        <div className="ind-profile-links" id="ind-profile-links" inert>
          {shortcuts.map(({ label, icon, href }) => (
            <a key={label} href={href} className={`ind-shortcut ind-shortcut-${icon}`}>
              <PortfolioIcon name={icon} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="ind-label ind-intro">SOFTWARE ENGINEER · HYDERABAD</p>
      <h1 id="ind-title" aria-label="Software for real workflows."><span className="ind-line" aria-hidden="true"><b><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">S</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">f</span></span><span className="ind-letter"><span className="ind-glyph">t</span></span><span className="ind-letter"><span className="ind-glyph">w</span></span><span className="ind-letter"><span className="ind-glyph">a</span></span><span className="ind-letter"><span className="ind-glyph">r</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span></span>{" "}<span className="ind-word"><span className="ind-letter"><span className="ind-glyph">f</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">r</span></span></span></b></span><span className="ind-line" aria-hidden="true"><em><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">r</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span><span className="ind-letter"><span className="ind-glyph">a</span></span><span className="ind-letter"><span className="ind-glyph">l</span></span></span>{" "}<span className="ind-word"><span className="ind-letter"><span className="ind-glyph">w</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">r</span></span><span className="ind-letter"><span className="ind-glyph">k</span></span><span className="ind-letter"><span className="ind-glyph">f</span></span><span className="ind-letter"><span className="ind-glyph">l</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">w</span></span><span className="ind-letter"><span className="ind-glyph">s</span></span><span className="ind-letter"><span className="ind-glyph">.</span></span></span></em></span></h1>
      <p className="ind-summary">I build products and AI agents. At TMUS Global Solutions, I led development of an agent that helps teams find bugs after a release.</p>
    </section>
  );
}

function Experience() {
  return (
    <section className="ind-shell ind-companies" id="experience" aria-labelledby="ind-companies">
      <h2 id="ind-companies" className="ind-label">Companies I’ve worked with</h2>
      <ul className="ind-employers">
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-tmus" data-employer="#ind-role-tmus" aria-expanded="false" aria-controls="ind-employer-details">
            <img src="/portfolio/t-mobile-wordmark-c7e128b.png" alt="" />
            <span>TMUS Global Solutions</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-meltwater" data-employer="#ind-role-meltwater" aria-expanded="false" aria-controls="ind-employer-details">
            <img src="/assets/mw-logo.svg" alt="" />
            <span>Meltwater</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-adp" data-employer="#ind-role-adp" aria-expanded="false" aria-controls="ind-employer-details">
            <img src="/assets/adp-logo.svg" alt="" />
            <span>ADP</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-highradius" data-employer="#ind-role-highradius" aria-expanded="false" aria-controls="ind-employer-details">
            <img src="/assets/hrc-logo.svg" alt="" />
            <span>HighRadius</span>
          </button>
        </li>
      </ul>
      <div className="ind-employer-card ind-employer-selection" id="ind-employer-details" role="region" hidden></div>
      <div className="ind-employer-card ind-employer-float" inert aria-hidden="true"></div>
      <div hidden id="ind-role-tmus">
        <h3>TMUS Global Solutions</h3>
        <p className="ind-role">Current · Agentic QA</p>
        <p>Led development of T-Crawl, an autonomous agent that tests web, iOS, and Android flows from a prompt and reports bugs for review. {tCrawlOutcome}</p>
      </div>
      <div hidden id="ind-role-meltwater">
        <h3>Meltwater</h3>
        <p className="ind-role">Software Engineer II · Influencer marketing</p>
        <p>Maintained and improved an influencer marketing platform that supports AI-enabled search, payment tracking, and campaigns. Researched new features for the wider Meltwater product suite.</p>
      </div>
      <div hidden id="ind-role-adp">
        <h3>ADP</h3>
        <p className="ind-role">Senior Member Technical · Payroll and HCM</p>
        <p>Developed enterprise payroll solutions and contributed to a next-generation human capital management platform. Led technical initiatives for enterprise applications.</p>
      </div>
      <div hidden id="ind-role-highradius">
        <h3>HighRadius</h3>
        <p className="ind-role">Associate Software Engineer I · Previously Software Engineer Intern</p>
        <p>Built an API framework that cut web posting time by about 40% and deployed backend automation for more than 20 customers. As an intern, improved internal frameworks and testing practices.</p>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="ind-note" id="about" aria-labelledby="ind-about-title">
      <div className="ind-shell ind-split" id="ind-about">
        <div className="ind-introduction-lead">
          <p className="ind-label">Introduction</p>
          <h2 id="ind-about-title">I build tools that make complex work <em>easier to verify.</em></h2>
        </div>
        <div className="ind-introduction-copy">
          <p>I’m Shailesh Das, a software engineer based in Hyderabad. My work spans enterprise payroll, influencer marketing, and post-release QA for web and mobile apps.</p>
          <p>I give agents a clear job and make their evidence easy to inspect. The people who own the outcome should have the context and authority to decide what happens next.</p>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="ind-shell ind-capabilities" id="skills" aria-labelledby="ind-capabilities">
      <h2 id="ind-capabilities">{"How I "}
        <em>build.</em>
      </h2>
      <p className="ind-cap-sub">Three ways I turn an engineering problem into something people can use.</p>
      <div className="ind-cap-grid">
        <details className="ind-visual-cap" style={{"--cap-bg": "#5454df"}}>
          <summary>
            <div className="ind-cap-art" aria-hidden="true">
              <img src="/portfolio/project-thumbnail-ab8bccb.jpg" alt="" loading="lazy" />
              <div className="ind-cap-tags">
                <span style={{"--tag-n": "0"}}>Prompt-driven QA</span>
                <span style={{"--tag-n": "1"}}>Web and mobile</span>
                <span style={{"--tag-n": "2"}}>Reviewable findings</span>
              </div>
            </div>
            <span className="ind-cap-card-title">Agentic QA</span>
          </summary>
          <div className="ind-cap-detail">
            <p>Turn a release-check prompt into a run that explores the flow and surfaces findings for the team to review.</p>
            <a href="#ind-tcrawl-notes" data-open="">{"See the T-Crawl project "}<span aria-hidden="true">↗</span></a>
          </div>
        </details>
        <details className="ind-visual-cap" style={{"--cap-bg": "#c5e4d8"}}>
          <summary>
            <div className="ind-cap-art" aria-hidden="true">
              <img src="/portfolio/project-thumbnail-91a305b.jpg" alt="" loading="lazy" />
              <div className="ind-cap-tags">
                <span style={{"--tag-n": "0"}}>Dashboards</span>
                <span style={{"--tag-n": "1"}}>Trend charts</span>
                <span style={{"--tag-n": "2"}}>Threshold alerts</span>
              </div>
            </div>
            <span className="ind-cap-card-title">Product engineering</span>
          </summary>
          <div className="ind-cap-detail">
            <p>Bring field readings into one dashboard so someone can spot a trend or act on an alert.</p>
            <a href="https://github.com/Angry-BOT/nordetect-app">{"Open Nordetect on GitHub "}<span aria-hidden="true">↗</span></a>
          </div>
        </details>
        <details className="ind-visual-cap" style={{"--cap-bg": "#ded8f6"}}>
          <summary>
            <div className="ind-cap-art" aria-hidden="true">
              <img src="/portfolio/project-thumbnail-d63aa9c.jpg" alt="" loading="lazy" />
              <div className="ind-cap-tags">
                <span style={{"--tag-n": "0"}}>Source citations</span>
                <span style={{"--tag-n": "1"}}>Interaction demos</span>
                <span style={{"--tag-n": "2"}}>Human review</span>
              </div>
            </div>
            <span className="ind-cap-card-title">Prototyping</span>
          </summary>
          <div className="ind-cap-detail">
            <p>Use a small working scene to test how a workflow reads before committing to a production implementation.</p>
            <a href="#ind-ask">{"See the portfolio assistant concept "}<span aria-hidden="true">↗</span></a>
          </div>
        </details>
      </div>
    </section>
  );
}

const projects = [
  { name: "T-Crawl", icon: "crawl", tone: "ind-indigo-icon", type: "Post-release QA", result: "42% faster bug finding", href: "#ind-tcrawl-notes", art: "#ind-art-tcrawl" },
  { name: "Nordetect", icon: "sensor", tone: "ind-mint-icon", type: "Agricultural sensing", result: "Sensor trends and threshold alerts", href: "https://github.com/Angry-BOT/nordetect-app", art: "#ind-art-nordetect" },
  { name: "Tractiv", icon: "location", tone: "ind-lilac-icon", type: "Personal safety prototype", result: "Emergency location sharing", href: "#ind-tractiv-notes", art: "#ind-art-tractiv" },
];

function Projects() {
  return (
    <section className="ind-shell ind-project-index" aria-labelledby="ind-project-index">
      <header className="ind-project-heading">
        <h2 id="ind-project-index">Things I’ve <em>built.</em></h2>
        <p>Software for release checks, field readings, and personal safety.</p>
      </header>
      <ul className="ind-project-rows">
        {projects.map(({ name, icon, tone, type, result, href, art }) => (
          <li key={name}>
            <a className="ind-project-row" href={href} data-open={href.startsWith("#") ? "" : undefined} data-preview={art}>
              <span className={`ind-project-icon ${tone}`}><PortfolioIcon name={icon} /></span>
              <strong>{name}</strong>
              <span className="ind-project-result">{result}</span>
              <span className="ind-project-type">{type}</span>
              <span className="ind-project-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <details className="ind-project-notes" id="ind-tcrawl-notes">
        <summary>T-Crawl details</summary>
        <p>I led development of T-Crawl, a prompt-driven QA agent that explores web, iOS, and Android apps and reports findings for review.</p>
        <p>{tCrawlOutcome}</p>
        <img src="/portfolio/project-thumbnail-ab8bccb.jpg" alt="Illustrative QA run showing a sample Android finding" className="ind-case-thumb" loading="lazy" width="640" height="420" />
      </details>
      <details className="ind-project-notes" id="ind-tractiv-notes">
        <summary>Tractiv details</summary>
        <p>A wearable and companion app prototype that shares an emergency location with trusted contacts.</p>
      </details>
      <div className="ind-hover-preview" aria-hidden="true" inert></div>
      <div hidden id="ind-art-tcrawl">
        <div className="ind-cover ind-blue">
          <span>T-Crawl</span>
          <span className="ind-tile-arrow" aria-hidden="true">↗</span>
          <img src="/portfolio/project-thumbnail-ab8bccb.jpg" alt="" width="640" height="420" draggable={false} />
        </div>
      </div>
      <div hidden id="ind-art-nordetect">
        <div className="ind-cover ind-mint">
          <span>Nordetect</span>
          <span className="ind-tile-arrow" aria-hidden="true">↗</span>
          <img src="/portfolio/project-thumbnail-91a305b.jpg" alt="" draggable={false} />
        </div>
      </div>
      <div hidden id="ind-art-tractiv">
        <div className="ind-cover ind-lilac">
          <span>Tractiv</span>
          <span className="ind-tile-arrow" aria-hidden="true">↗</span>
          <div className="ind-map" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </section>
  );
}

function Assistant() {
  return (
    <section className="ind-shell ind-assistant ind-split" aria-labelledby="ind-ask">
      <div>
        <p className="ind-label">PORTFOLIO ASSISTANT</p>
        <h2 id="ind-ask">Ask about
          <br />
          <em>my work.</em>
        </h2>
        <p className="ind-copy">Ask a question and explore the public sources behind the answer.</p>
      </div>
      <PortfolioAssistant />
    </section>
  );
}

function Contact() {
  return (
    <div className="ind-dark">
      <CareerHighlights />
      <div id="contact">
        <footer id="ind-contact" className="ind-shell ind-footer ind-rule">
          <div className="ind-footer-art" aria-hidden="true">S
            <i></i>D
          </div>
          <h2>
            <a className="ind-footer-title" href="mailto:shailo199925@gmail.com" aria-label="Let’s build something. Email Shailesh Das."><span aria-hidden="true"><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">L</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span><span className="ind-letter"><span className="ind-glyph">t</span></span><span className="ind-letter"><span className="ind-glyph">’</span></span><span className="ind-letter"><span className="ind-glyph">s</span></span></span>{" "}<span className="ind-word"><span className="ind-letter"><span className="ind-glyph">b</span></span><span className="ind-letter"><span className="ind-glyph">u</span></span><span className="ind-letter"><span className="ind-glyph">i</span></span><span className="ind-letter"><span className="ind-glyph">l</span></span><span className="ind-letter"><span className="ind-glyph">d</span></span></span></span><em aria-hidden="true"><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">s</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">m</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span><span className="ind-letter"><span className="ind-glyph">t</span></span><span className="ind-letter"><span className="ind-glyph">h</span></span><span className="ind-letter"><span className="ind-glyph">i</span></span><span className="ind-letter"><span className="ind-glyph">n</span></span><span className="ind-letter"><span className="ind-glyph">g</span></span></span></em></a>
          </h2>
          <div className="ind-contact">
            <a href="mailto:shailo199925@gmail.com">Email ↗</a>
            <a href="https://github.com/Angry-BOT">GitHub ↗</a>
            <a href="https://in.linkedin.com/in/shaileshdas12">LinkedIn ↗</a>
          </div>
          <p className="ind-footer-credit">© 2026 SHAILESH DAS</p>
        </footer>
      </div>
    </div>
  );
}

const careerRoles = [
  { company: "TMUS Global Solutions", role: "Current · Telecom software engineering" },
  { company: "Meltwater", role: "Software Engineer II", focus: "Improved an influencer marketing platform that supports search, campaign management, and payment tracking." },
  { company: "ADP", role: "Senior Member Technical", focus: "Developed enterprise payroll software and contributed to a human capital management platform." },
  { company: "HighRadius", role: "Associate Software Engineer I · Previously Software Engineer Intern", focus: "Built an API framework that cut web posting time by about 40% and deployed backend automation for more than 20 customers." },
];

const programmingLanguages = ["Java", "JavaScript", "SQL", "Python"];
const technologies = ["React", "Node.js", "Express.js", "Spring", "Hibernate", "REST APIs", "Docker", "Git"];

function CareerHighlights() {
  return (
    <section className="ind-shell ind-highlights" aria-labelledby="ind-highlights-title">
      <div className="ind-highlights-intro">
        <p className="ind-label">Career highlights</p>
        <h2 id="ind-highlights-title">Work with <em>measurable impact.</em></h2>
        <a className="ind-career-profile" href="https://in.linkedin.com/in/shaileshdas12">View LinkedIn profile <span aria-hidden="true">↗</span></a>
      </div>
      <div className="ind-career-history">
        <h3 className="ind-label">Corporate experience</h3>
        <ul className="ind-career-roles">
          {careerRoles.map(({ company, role, focus }) => (
            <li key={company}>
              <h4>{company}</h4>
              <p className="ind-career-role">{role}</p>
              {focus && <p>{focus}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="ind-career-facts">
        <div>
          <h3 className="ind-label">Programming languages</h3>
          <ul className="ind-career-skills">
            {programmingLanguages.map(language => <li key={language}>{language}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="ind-label">Technologies I’ve worked with</h3>
          <ul className="ind-career-skills">
            {technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="ind-label">Education and recognition</h3>
          <ul className="ind-career-credentials">
            <li>B.Tech in Computer Engineering, KIIT Bhubaneswar</li>
            <li>AWS Fundamentals: Going Cloud-Native</li>
            <li>Microsoft MTA in Python programming</li>
            <li>HighRadius Star Team Award and Highflyer of the Quarter</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function DesignSystem() {
  return (
    <aside className="ind-system" aria-label="Design system for review">
      <details className="ind-shell" id="ind-system">
        <summary>{"Design system "}
          <span>{"Type, color, components & motion"}</span>
        </summary>
        <button type="button" className="ind-replay" hidden>Replay the opening</button>
        <div className="ind-system-grid">
          <div>
            <h3>Color</h3>
            <div className="ind-swatches">
              <span style={{"--swatch": "#eff2fb"}}>{"Mist "}<code>#EFF2FB</code></span>
              <span style={{"--swatch": "#101219"}}>{"Ink "}<code>#101219</code></span>
              <span style={{"--swatch": "#3835d4"}}>{"Indigo "}<code>#3835D4</code></span>
              <span style={{"--swatch": "#101219"}}>{"Night "}<code>#101219</code></span>
              <span style={{"--swatch": "#d7ecdf"}}>{"Mint "}<code>#D7ECDF</code></span>
              <span style={{"--swatch": "#e2dbf8"}}>{"Lilac "}<code>#E2DBF8</code></span>
            </div>
          </div>
          <div>
            <h3>Type and layout</h3>
            <p>Instrument Sans 400–600 for UI and display, Instrument Serif italic for expressive lines, DM Mono 400 for short labels. Hero 47–140 px, sections 43–91 px, body 16–19 px. Use 20–76 px gutters and a 1120 px content cap. Project covers use 18 px corners. Actions use pills or 44 px circles.</p>
          </div>
          <div>
            <h3>Components and states</h3>
            <p>Center the navigation pill with the theme button beside Contact. Right-align the location, local time, and résumé. The theme starts with the device preference and remembers a manual choice. Employer tiles open descriptions on click, tap, or Enter. The career section pairs roles with skills and credentials.</p>
          </div>
          <div>
            <h3>Motion</h3>
            <p>On hover, individual letters in the hero and footer travel up to 13 px and settle in 630 ms. The portrait contracts to 74% as shortcuts fan out from the nearest pair with a 45 ms stagger. Tap or Enter opens the same links. Capability tags reveal with 43 ms stagger. The name swaps to SD in compact navigation.</p>
            <p>GSAP animates the opposing headline entrance, glyph response, portrait links, capability tags, pointer previews, and navigation swap. Employer previews fade and scale in over 280 ms. Reduced motion keeps all controls usable with instant transitions.</p>
          </div>
        </div>
      </details>
    </aside>
  );
}

export default function PortfolioPage() {
  return (
    <div id="sd-indigo">
      <Header />
      <main id="ind-home">
        <Hero />
        <Experience />
        <Introduction />
        <Capabilities />
        <Projects />
        <Assistant />
        <Contact />
      </main>
      <DesignSystem />
      <PortfolioInteractions />
    </div>
  );
}
