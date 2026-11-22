import assert from "node:assert/strict";
import test from "node:test";
import { findPortfolioAnswer, suggestions, tCrawlOutcome } from "../app/assistant-content.js";

test("every suggested question has a sourced answer", () => {
  for (const question of suggestions) {
    assert.ok(findPortfolioAnswer(question).sources.length > 0, question);
  }
});

test("incidental words cannot select an unrelated answer", () => {
  const questions = [
    "What is the weather in Hyderabad for 42 days?",
    "What bugs did Shailesh find at ADP?",
    "What is T-Crawl's budget?",
    "Is the sensor in my phone broken?",
  ];
  for (const question of questions) {
    assert.deepEqual(findPortfolioAnswer(question).sources, [], question);
  }
});

test("the T-Crawl outcome cites a disclosure containing the result", () => {
  const { answer, sources } = findPortfolioAnswer("What was the impact of T-Crawl?");
  assert.ok(answer.includes(tCrawlOutcome));
  assert.deepEqual(sources, [
    { label: "T-Crawl project and outcome", href: "#ind-tcrawl-notes", openDetails: true },
  ]);
});

test("contact questions cite the channel requested", () => {
  assert.equal(findPortfolioAnswer("Does Shailesh have a public GitHub profile?").sources[0].href, "https://github.com/Angry-BOT");
  assert.match(findPortfolioAnswer("Where can I find his résumé?").sources[0].href, /^https:\/\/drive\.google\.com\//);
});
