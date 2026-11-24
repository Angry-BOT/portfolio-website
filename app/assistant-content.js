const linkedin = "https://in.linkedin.com/in/shaileshdas12";
const github = "https://github.com/Angry-BOT";
const email = "mailto:shailo199925@gmail.com";

export const resumeUrl = "https://drive.google.com/file/d/1mvgj97akaX7njDnKi-RsIO_-erzbAaFj/view?usp=sharing";
export const tCrawlOutcome = "T-Crawl helped teams find bugs 42% faster after production deployments on T-Mobile apps and websites.";

const topics = [
  {
    questions: /^(?:t ?crawl(?: s)?(?: (?:impact|outcome|results|platforms))?|(?:the )?(?:impact|outcome|results) of t ?crawl|how does t ?crawl work|what (?:does t ?crawl do|platforms does t ?crawl (?:cover|support|test)|impact did t ?crawl have))$/,
    answer: `At TMUS Global Solutions, Shailesh led development of T-Crawl, a prompt-driven QA agent for web, iOS, and Android. It reports findings for review. ${tCrawlOutcome}`,
    sources: [{ label: "TMUS experience and T-Crawl outcome", href: "#ind-company-tmus", openDetails: true }],
  },
  {
    questions: /^(?:nordetect(?: dashboard)?|how does nordetect work|what does nordetect do)$/,
    answer: "Nordetect brings agricultural sensor readings into one dashboard, with nitrogen trend charts and threshold alerts.",
    sources: [{ label: "Nordetect GitHub repository", href: `${github}/nordetect-app` }],
  },
  {
    questions: /^(?:tractiv(?: prototype)?|how does tractiv work|what does tractiv do)$/,
    answer: "Tractiv is a personal safety prototype that pairs a wearable and mobile app to share an emergency location with trusted contacts.",
    sources: [{ label: "Tractiv GitHub repository", href: `${github}/Tractiv-Track-your-Peers` }],
  },
  {
    questions: /^(?:(?:(?:shailesh(?: das)? s|his|your) )?(?:experience|career|work history|current employer|previous roles)|where (?:(?:has|does|did) (?:shailesh(?: das)?|he|you)|have you) work(?:ed)?(?: (?:before|now))?|what companies has (?:shailesh(?: das)?|he) worked (?:at|for))$/,
    answer: "Shailesh is currently at TMUS Global Solutions. His previous roles include Software Engineer II at Meltwater, Senior Member Technical at ADP, and Associate Software Engineer I at HighRadius.",
    sources: [{ label: "Portfolio experience", href: "#ind-companies" }, { label: "LinkedIn profile", href: linkedin }],
  },
  {
    questions: /^(?:(?:(?:shailesh(?: das)? s|his|your) )?(?:contact(?: details)?|email(?: address)?|linkedin(?: profile)?)|how (?:can|do) i (?:contact|reach|email|get in touch with) (?:shailesh(?: das)?|him|you))$/,
    answer: "You can reach Shailesh by email or LinkedIn.",
    sources: [{ label: "Email Shailesh", href: email }, { label: "LinkedIn profile", href: linkedin }],
  },
  {
    questions: /^(?:(?:(?:shailesh(?: das)? s|his|your) )?(?:public )?github(?: profile)?|(?:does (?:shailesh(?: das)?|he)|do you) have (?:a )?(?:public )?github(?: profile)?)$/,
    answer: "Shailesh’s public GitHub profile is Angry-BOT.",
    sources: [{ label: "Shailesh’s GitHub profile", href: github }],
  },
  {
    questions: /^(?:(?:(?:shailesh(?: das)? s|his|your) )?(?:resume|cv)|where can i (?:find|see|download) (?:shailesh(?: das)? s|his|your) (?:resume|cv))$/,
    answer: "Shailesh’s résumé is linked from the portfolio navigation.",
    sources: [{ label: "Résumé", href: resumeUrl }],
  },
  {
    questions: /^(?:(?:(?:shailesh(?: das)? s|his|your) )?(?:human oversight|approach to (?:ai )?agents(?: and human oversight)?)|how does (?:shailesh(?: das)?|he) (?:handle|ensure) human oversight(?: of (?:an? )?(?:ai )?agents?)?)$/,
    answer: "Shailesh favors giving an agent a clear scope, making its evidence easy to inspect, and leaving consequential decisions with the people who own them.",
    sources: [{ label: "Approach to agents", href: "#ind-about" }],
  },
];

export const suggestions = ["What is T-Crawl?", "What is Nordetect?", "Where has Shailesh worked?"];

export function findPortfolioAnswer(question) {
  const normalized = question.toLowerCase().normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/^(?:please )?(?:what (?:is|was)|tell me about|describe|explain) /, "");
  const topic = topics.find(({ questions }) => questions.test(normalized));
  if (topic) {
    return { answer: topic.answer, sources: topic.sources };
  }

  return {
    answer: "I don’t have a public portfolio source for that question. Try asking what T-Crawl does, where Shailesh has worked, or how to contact him.",
    sources: [],
  };
}
