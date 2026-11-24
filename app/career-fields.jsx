import PortfolioIcon from "./portfolio-icon";

const engineering = [
  { name: "Enterprise payroll", icon: "architecture" },
  { name: "Influencer marketing", icon: "work" },
  { name: "Agentic QA", icon: "review" },
];

const ai = [
  { name: "Claude Agent SDK", logo: "claude" },
  { name: "LangChain", logo: "langchain" },
  { name: "LangGraph", logo: "langgraph" },
  { name: "Harness engineering", icon: "harness" },
  { name: "Kubernetes (K8s)", logo: "kubernetes" },
  { name: "System design", icon: "architecture" },
  { name: "Human-in-the-loop workflows", icon: "review" },
];

const tools = [
  { name: "Claude Code", logo: "claude-code" },
  { name: "Codex", logo: "codex" },
  { name: "Google Antigravity", logo: "antigravity" },
];

const hobbies = [
  { name: "Reverse engineering", icon: "puzzle" },
  { name: "Gaming", icon: "gamepad" },
  { name: "Building AI-enabled IoT devices", icon: "chip" },
  { name: "Exploring new technology", icon: "spark" },
  { name: "Reading technical articles", icon: "book" },
];

function CareerItems({ items }) {
  return (
    <ul className="ind-career-items">
      {items.map(({ name, logo, icon }) => (
        <li key={name}>
          <span className={logo ? "ind-field-icon ind-field-logo" : "ind-field-icon"}>
            {logo ? <img src={"/portfolio/icons/" + logo + ".svg"} width="18" height="18" alt="" /> : <PortfolioIcon name={icon} />}
          </span>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function CareerFields() {
  return (
    <div className="ind-impact-fields">
      <div className="ind-impact-field">
        <h3>Total experience</h3>
        <p className="ind-field-metric"><strong>6+</strong> years</p>
        <p className="ind-field-summary">Software engineering since April 2020, including internships.</p>
        <CareerItems items={engineering} />
        <a className="ind-career-link" href="#experience">View company experience <span aria-hidden="true">↗</span></a>
      </div>
      <div className="ind-impact-field">
        <h3>AI Experience</h3>
        <p className="ind-field-metric"><strong>1+</strong> years</p>
        <p className="ind-field-summary">Building AI agents and the systems around them.</p>
        <CareerItems items={ai} />
      </div>
      <div className="ind-impact-field ind-impact-compact">
        <h3>Agentic tools I love</h3>
        <CareerItems items={tools} />
      </div>
      <div className="ind-impact-field ind-impact-compact">
        <h3>Hobbies</h3>
        <CareerItems items={hobbies} />
      </div>
    </div>
  );
}
