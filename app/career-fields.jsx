import PortfolioIcon from "./portfolio-icon";

const fields = [
  {
    title: "Total experience",
    metric: "6+ years",
    summary: "Software engineering, including internship",
    items: [{ name: "Engineering since April 2020", icon: "briefcase" }],
    note: "I started as a software engineering intern at HighRadius and moved into a full-time role in June 2021.",
  },
  {
    title: "AI Experience",
    metric: "1+ years",
    items: [
      { name: "Claude Agent SDK", logo: "claude" },
      { name: "LangChain", logo: "langchain" },
      { name: "LangGraph", logo: "langgraph" },
      { name: "Harness engineering", icon: "harness" },
      { name: "Kubernetes (K8s)", logo: "kubernetes" },
      { name: "System design", icon: "architecture" },
      { name: "Human-in-the-loop workflows", icon: "review" },
    ],
  },
  {
    title: "Agentic tools I love",
    summary: "Claude Code, Codex, and Antigravity",
    items: [
      { name: "Claude Code", logo: "claude-code" },
      { name: "Codex", logo: "codex" },
      { name: "Google Antigravity", logo: "antigravity" },
    ],
  },
  {
    title: "Hobbies",
    summary: "Taking things apart, building devices, and gaming",
    items: [
      { name: "Reverse engineering", icon: "puzzle" },
      { name: "Gaming", icon: "gamepad" },
      { name: "Building AI-enabled IoT devices", icon: "chip" },
      { name: "Exploring new technology", icon: "spark" },
      { name: "Reading technical articles", icon: "book" },
    ],
  },
];

function FieldIcon({ item }) {
  return (
    <span className={item.logo ? "ind-field-icon ind-field-logo" : "ind-field-icon"}>
      {item.logo ? <img src={`/portfolio/icons/${item.logo}.svg`} width="20" height="20" alt="" /> : <PortfolioIcon name={item.icon} />}
    </span>
  );
}

export default function CareerFields() {
  return (
    <div className="ind-impact-fields">
      {fields.map(({ title, metric, summary, items, note }) => (
        <details key={title} className="ind-impact-field">
          <summary>
            <span className="ind-field-label">{title}</span>
            <span className="ind-field-indicator" aria-hidden="true" />
            {metric && <strong className="ind-field-metric">{metric}</strong>}
            <span className="ind-field-summary">{summary ?? items.map(item => item.name).join(", ")}</span>
            <span className="ind-field-icon-row" aria-hidden="true">
              {items.slice(0, 4).map(item => <FieldIcon key={item.name} item={item} />)}
            </span>
          </summary>
          <div className="ind-field-detail">
            <ul>
              {items.map(item => (
                <li key={item.name}><FieldIcon item={item} />{item.name}</li>
              ))}
            </ul>
            {note && <p>{note}</p>}
          </div>
        </details>
      ))}
    </div>
  );
}
