"use client";

import { useState } from "react";
import { findPortfolioAnswer, suggestions } from "./assistant-content";

export default function PortfolioAssistant() {
  const [question, setQuestion] = useState("");
  const [turn, setTurn] = useState(null);

  function answer(value) {
    const prompt = value.trim();
    if (!prompt) return;
    setTurn({ prompt, ...findPortfolioAnswer(prompt) });
    setQuestion("");
  }

  return (
    <div className="portfolio-assistant" aria-label="Portfolio assistant">
      <div className="assistant-bar">Portfolio assistant</div>
      <div className="assistant-body">
        <div className="assistant-suggestions" aria-label="Suggested questions">
          {suggestions.map(prompt => <button key={prompt} type="button" onClick={() => answer(prompt)}>{prompt}</button>)}
        </div>
        <div aria-live="polite" aria-atomic="true" className="assistant-answer">
          {turn && (
            <>
              <p className="assistant-question">{turn.prompt}</p>
              <p>{turn.answer}</p>
              {turn.sources.length > 0 && <ul>{turn.sources.map(source => (
                <li key={source.href}><a href={source.href} data-open={source.openDetails ? "" : undefined}>{source.label}</a></li>
              ))}</ul>}
            </>
          )}
        </div>
        <form onSubmit={event => { event.preventDefault(); answer(question); }}>
          <label htmlFor="portfolio-question">Ask about my work</label>
          <div className="assistant-input">
            <input id="portfolio-question" value={question} maxLength={240} onChange={event => setQuestion(event.target.value)} />
            <button type="submit" disabled={!question.trim()}>Ask</button>
          </div>
        </form>
      </div>
    </div>
  );
}
