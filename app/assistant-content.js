const linkedin = "https://in.linkedin.com/in/shaileshdas12";
const nordetect = "https://github.com/Angry-BOT/nordetect-app";
const topics = [
  {
    aliases: ["t crawl", "tcrawl", "t mobile", "tmus", "qa", "bug", "testing", "regression", "agent", "42"],
    answer: "At TMUS Global Solutions, Shailesh led development of T-Crawl, a prompt-driven QA agent for web, iOS, and Android. It reports findings for review and helped teams find bugs 42% faster after production deployments on T-Mobile apps and websites.",
    sources: [{ label: "T-Crawl project", href: "#ind-tcrawl-notes" }, { label: "Portfolio experience", href: "#ind-companies" }],
  },
  {
    aliases: ["nordetect", "dashboard", "sensor", "agriculture", "nitrogen", "threshold"],
    answer: "Nordetect brings agricultural sensor readings into one dashboard, with nitrogen trend charts and threshold alerts.",
    sources: [{ label: "Nordetect GitHub repository", href: nordetect }],
  },
  {
    aliases: ["tractiv", "wearable", "emergency", "location", "safety"],
    answer: "Tractiv is a personal safety prototype that pairs a wearable and mobile app to share an emergency location with trusted contacts.",
    sources: [{ label: "Tractiv project", href: "#ind-tractiv-notes" }, { label: "LinkedIn projects", href: linkedin }],
  },
  {
    aliases: ["meltwater", "adp", "highradius", "experience", "career", "employer", "company", "worked", "work history", "payroll", "marketing"],
    answer: "Shailesh is currently at TMUS Global Solutions. His previous roles include Software Engineer II at Meltwater, Senior Member Technical at ADP, and Associate Software Engineer I at HighRadius.",
    sources: [{ label: "Portfolio experience", href: "#ind-companies" }, { label: "LinkedIn profile", href: linkedin }],
  },
  {
    aliases: ["contact", "email", "reach", "linkedin", "github", "resume", "cv", "say hello", "get in touch"],
    answer: "You can reach Shailesh by email or LinkedIn. His résumé is linked from the portfolio navigation.",
    sources: [{ label: "Email Shailesh", href: "mailto:shailo199925@gmail.com" }, { label: "LinkedIn profile", href: linkedin }],
  },
  {
    aliases: ["oversight", "approach", "human", "control", "evidence", "verify"],
    answer: "Shailesh favors giving an agent a clear scope, making its evidence easy to inspect, and leaving consequential decisions with the people who own them.",
    sources: [{ label: "Approach to agents", href: "#ind-about" }],
  },
];

export const suggestions = ["What is T-Crawl?", "What is Nordetect?", "Where has Shailesh worked?"];

export function findPortfolioAnswer(question) {
  const normalized = ` ${question.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim()} `;
  let best;
  let highScore = 0;
  for (const topic of topics) {
    const score = topic.aliases.reduce(
      (sum, alias) => sum + (normalized.includes(` ${alias} `) ? alias.split(" ").length : 0),
      0
    );
    if (score > highScore) {
      highScore = score;
      best = topic;
    }
  }
  return best ?? {
    answer: "I don’t have a public portfolio source for that question. Try asking about a project, work history, or how to get in touch.",
    sources: [],
  };
}
