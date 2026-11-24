import CareerFields from "./career-fields";
import PortfolioInteractions from "./portfolio-interactions";
import HyderabadTime from "./hyderabad-time";
import PortfolioIcon from "./portfolio-icon";
import ThemeToggle from "./theme-toggle";
import Workflow from "./workflow";

const resumeUrl = "https://drive.google.com/file/d/1mvgj97akaX7njDnKi-RsIO_-erzbAaFj/view?usp=sharing";
const tCrawlOutcome = "T-Crawl helped teams find bugs 42% faster after production deployments on T-Mobile apps and websites.";

const contactLinks = [
  { label: "Email", icon: "email", href: "mailto:shailo199925@gmail.com" },
  { label: "GitHub", icon: "github", href: "https://github.com/Angry-BOT" },
  { label: "LinkedIn", icon: "linkedin", href: "https://in.linkedin.com/in/shaileshdas12" },
];

const shortcuts = [
  { label: "Work", icon: "work", href: "#ind-project-index" },
  ...contactLinks,
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
        <a className="ind-resume" href={resumeUrl} aria-label="Résumé"><PortfolioIcon name="document" /><span className="ind-resume-label">Résumé <span aria-hidden="true">↗</span></span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="ind-hero ind-shell" aria-labelledby="ind-title">
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
      <a className="ind-hero-action" href="#ind-project-index">Explore my work <span aria-hidden="true">↗</span></a>
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
            <img className="ind-employer-logo" src="/portfolio/t-mobile-wordmark-c7e128b.png" alt="" />
            <span>TMUS Global Solutions</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-meltwater" data-employer="#ind-role-meltwater" aria-expanded="false" aria-controls="ind-employer-details">
            <img className="ind-employer-logo" src="/assets/mw_logo_blue_stacked.svg" alt="" />
            <span>Meltwater</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-adp" data-employer="#ind-role-adp" aria-expanded="false" aria-controls="ind-employer-details">
            <img className="ind-employer-logo" src="/assets/adp-logo.svg" alt="" />
            <span>ADP</span>
          </button>
        </li>
        <li>
          <button type="button" className="ind-employer-button" id="ind-company-highradius" data-employer="#ind-role-highradius" aria-expanded="false" aria-controls="ind-employer-details">
            <img className="ind-employer-logo" src="/assets/hrc-logo.svg" alt="" />
            <span>HighRadius</span>
          </button>
        </li>
      </ul>
      <div className="ind-employer-card ind-employer-selection" id="ind-employer-details" role="region" hidden></div>
      <div className="ind-employer-card ind-employer-float" inert aria-hidden="true"></div>
      <div hidden id="ind-role-tmus">
        <h3>TMUS Global Solutions</h3>
        <p className="ind-role">Senior Software Engineer · EDX AI Team</p>
        <p className="ind-role-dates">Dec 2025–present · Hyderabad, hybrid</p>
        <p>Led development of T-Crawl, an autonomous QA agent for T-Mobile apps and websites. A tester describes what to check, and the agent explores the flow on web, iOS, or Android and reports bugs for human review.</p>
        <p>{tCrawlOutcome}</p>
      </div>
      <div hidden id="ind-role-meltwater">
        <h3>Meltwater</h3>
        <p className="ind-role">Software Engineer II · Klear</p>
        <p className="ind-role-dates">Jan–Nov 2025 · Hyderabad, hybrid</p>
        <p>Maintained and improved Klear, Meltwater’s influencer marketing platform for discovering creators with AI-assisted search, managing campaigns, and tracking creator payments.</p>
        <p>Conducted research and development on new features for the wider Meltwater product suite.</p>
      </div>
      <div hidden id="ind-role-adp">
        <h3>ADP</h3>
        <p className="ind-role">Senior Member Technical · Lyric</p>
        <p className="ind-role-dates">Oct 2023–Jan 2025 · Hyderabad, hybrid</p>
        <p>Developed payroll solutions for large enterprise clients. Helped build Lyric, a human capital management platform designed to serve businesses of different sizes.</p>
        <p>Led technical initiatives for enterprise-scale applications.</p>
      </div>
      <div hidden id="ind-role-highradius">
        <h3>HighRadius</h3>
        <p className="ind-role">Associate Software Engineer I · Deduction Management System</p>
        <p className="ind-role-dates">Jun 2021–Sep 2023 · Hyderabad, on-site</p>
        <p>Designed a Node.js REST API framework that cut web posting time by about 40%. Built and deployed backend automation for more than 20 customers.</p>
        <p className="ind-earlier-role">Earlier internships · Apr 2020–Jun 2021</p>
        <p>Built a full-stack accounts receivable tool with payment predictions and interactive analytics. On the CPA product, developed Java and Spring applications backed by SQL, fixed framework bugs, and wrote tests.</p>
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
          <h2 id="ind-about-title" data-text-reveal><span>I build tools that make complex work</span>{" "}<em>easier to verify.</em></h2>
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
      <h2 id="ind-capabilities" data-text-reveal><span>Engineering in the</span>{" "}<em>AI era.</em></h2>
      <p className="ind-cap-sub">Explore the four stages from a scoped problem to a monitored release.</p>
      <Workflow />
    </section>
  );
}

const projects = [
  {
    name: "Shaka Design Lab",
    icon: "work",
    tone: "ind-sand-icon",
    type: "Freelance client project",
    result: "Portfolio website for an interior design studio.",
    href: "https://shakadesignlab.com/",
    repo: { label: "Shaka Design Lab source", href: "https://github.com/Angry-BOT/shaka-design-lab-website" },
  },
  {
    name: "Krackjack",
    icon: "microphone",
    tone: "ind-lilac-icon",
    type: "Interview preparation prototype",
    result: "Real-time speech transcription and AI-generated practice responses.",
    href: "https://github.com/Angry-BOT/krackjack_ui",
    repo: { label: "Krackjack backend", href: "https://github.com/Angry-BOT/krackjack_service" },
  },
  {
    name: "Simple RAG App",
    icon: "book",
    tone: "ind-indigo-icon",
    type: "Document Q&A",
    result: "Upload PDF, text, or HTML and ask questions with source citations.",
    href: "https://github.com/Angry-BOT/simple-rag-app",
  },
  {
    name: "Nordetect",
    icon: "sensor",
    tone: "ind-mint-icon",
    type: "Agricultural IoT",
    result: "Monitor device readings, chart nitrogen trends, and flag threshold violations.",
    href: "https://github.com/Angry-BOT/nordetect-app",
    image: "/portfolio/project-thumbnail-91a305b.jpg",
  },
];

function Projects() {
  return (
    <section className="ind-shell ind-project-index" aria-labelledby="ind-project-index">
      <header className="ind-project-heading">
        <h2 id="ind-project-index" data-text-reveal><span>Things I’ve</span>{" "}<em>built.</em></h2>
        <p>Freelance work and experiments in AI, data, and connected devices.</p>
      </header>
      <ul className="ind-project-rows">
        {projects.map(({ name, icon, tone, type, result, href, repo }, index) => (
          <li key={name} className="ind-project-row" data-preview={`#ind-art-${index}`}>
            <a className="ind-project-main" href={href}>
              <span className={`ind-project-icon ${tone}`}><PortfolioIcon name={icon} /></span>
              <strong>{name}</strong>
              <span className="ind-project-result">{result}</span>
              <span className="ind-project-type">{type}</span>
              {!repo && <span className="ind-project-arrow" aria-hidden="true"><span>↗</span></span>}
            </a>
            {repo && (
              <a className="ind-project-arrow ind-project-arrow-link" href={repo.href} aria-label={repo.label} title={repo.label}>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="ind-hover-preview" aria-hidden="true" inert></div>
      {projects.map(({ name, icon, tone, image }, index) => (
        <div hidden id={`ind-art-${index}`} key={name}>
          <div className={`ind-cover ind-project-cover ${tone}`}>
            <span>{name}</span>
            {image ? <img src={image} alt="" loading="lazy" draggable={false} /> : <PortfolioIcon name={icon} />}
          </div>
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <>
      <CareerHighlights />
      <div id="contact">
        <footer id="ind-contact" className="ind-shell ind-footer ind-rule">
          <h2 data-text-reveal>
            <a className="ind-footer-title" href="mailto:shailo199925@gmail.com" aria-label="Let’s build something. Email Shailesh Das."><span aria-hidden="true"><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">L</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span><span className="ind-letter"><span className="ind-glyph">t</span></span><span className="ind-letter"><span className="ind-glyph">’</span></span><span className="ind-letter"><span className="ind-glyph">s</span></span></span>{" "}<span className="ind-word"><span className="ind-letter"><span className="ind-glyph">b</span></span><span className="ind-letter"><span className="ind-glyph">u</span></span><span className="ind-letter"><span className="ind-glyph">i</span></span><span className="ind-letter"><span className="ind-glyph">l</span></span><span className="ind-letter"><span className="ind-glyph">d</span></span></span></span><em aria-hidden="true"><span className="ind-word"><span className="ind-letter"><span className="ind-glyph">s</span></span><span className="ind-letter"><span className="ind-glyph">o</span></span><span className="ind-letter"><span className="ind-glyph">m</span></span><span className="ind-letter"><span className="ind-glyph">e</span></span><span className="ind-letter"><span className="ind-glyph">t</span></span><span className="ind-letter"><span className="ind-glyph">h</span></span><span className="ind-letter"><span className="ind-glyph">i</span></span><span className="ind-letter"><span className="ind-glyph">n</span></span><span className="ind-letter"><span className="ind-glyph">g</span></span></span></em></a>
          </h2>
          <div className="ind-contact">
            {contactLinks.map(({ href, label, icon }) => (
              <a href={href} key={label}>
                <PortfolioIcon name={icon} />
                {label}
                <span className="ind-contact-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="ind-footer-credit">© 2026 SHAILESH DAS</p>
        </footer>
      </div>
    </>
  );
}

function CareerHighlights() {
  return (
    <section className="ind-shell ind-highlights" aria-labelledby="ind-highlights-title">
      <div className="ind-highlights-intro">
        <p className="ind-label">Career highlights</p>
        <h2 id="ind-highlights-title" data-text-reveal><span>Work with</span>{" "}<em>measurable impact.</em></h2>
      </div>
      <CareerFields />
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div id="sd-indigo">
      <div className="ind-page-gradient" aria-hidden="true">
        <div className="ind-page-wash" />
      </div>
      <Header />
      <main id="ind-home">
        <Hero />
        <Experience />
        <Introduction />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
      <PortfolioInteractions />
    </div>
  );
}
