"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import PortfolioIcon from "./portfolio-icon";

const stages = [
  {
    label: "Scope",
    title: "Scope the change",
    icon: "architecture",
    detail: "Give Claude Code the relevant files, constraints, and acceptance criteria. Review its plan, pick the smallest useful change, and agree on how to verify it.",
    path: [
      { icon: "book", label: "Repository context" },
      { icon: "harness", label: "Claude Code plan" },
      { icon: "review", label: "Reviewed scope" },
    ],
  },
  {
    label: "Prototype",
    title: "Prototype one real workflow",
    icon: "work",
    detail: "Build one end-to-end path with representative data, including empty and failure states. Give coding agents bounded implementation or test tasks, then try the workflow with a user.",
    path: [
      { icon: "architecture", label: "Representative data" },
      { icon: "work", label: "Working prototype" },
      { icon: "review", label: "User feedback" },
    ],
  },
  {
    label: "Verify",
    title: "Verify before merging",
    icon: "review",
    detail: "Run tests in CI and have a person review the diff. For agents, add evals for the final outcome, tool failures, and actions that require human approval.",
    path: [
      { icon: "harness", label: "CI tests" },
      { icon: "architecture", label: "Agent evals" },
      { icon: "review", label: "Human review" },
    ],
  },
  {
    label: "Operate",
    title: "Ship and monitor",
    icon: "sensor",
    detail: "Roll out gradually. Watch error rates, latency, and model cost. Use traces to diagnose failed calls, roll back when needed, and turn recurring issues into regression tests.",
    path: [
      { icon: "work", label: "Gradual rollout" },
      { icon: "sensor", label: "Traces and alerts" },
      { icon: "harness", label: "Regression tests" },
    ],
  },
];

export default function Workflow() {
  const [active, setActive] = useState(0);
  const tabs = useRef(null);
  const panels = useRef(null);
  const previous = useRef(active);

  useLayoutEffect(() => {
    const before = previous.current;
    previous.current = active;
    if (before === active) return;

    const outgoing = panels.current.children[before];
    const incoming = panels.current.children[active];
    const direction = Math.sign(active - before);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(outgoing, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -6, duration: .21 })
        .fromTo(incoming, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .42 }, .13)
        .from(incoming.querySelector(".ind-stage-track span"), { scaleX: 0, duration: .55 }, .20)
        .from(incoming.querySelectorAll(".ind-stage-node"), { opacity: .3, x: direction * 8, duration: .38, stagger: .065 }, .25);
    });
    return () => media.revert();
  }, [active]);

  function handleKeys(event, index) {
    const last = stages.length - 1;
    const nextIndex = {
      ArrowLeft: index === 0 ? last : index - 1,
      ArrowRight: index === last ? 0 : index + 1,
      Home: 0,
      End: last,
    }[event.key];

    if (!Number.isInteger(nextIndex)) return;
    event.preventDefault();
    setActive(nextIndex);
    tabs.current.children[nextIndex].focus();
  }

  return (
    <div className="ind-workflow">
      <div className="ind-workflow-tabs" role="tablist" aria-label="Engineering stages" ref={tabs}>
        {stages.map(({ label, icon }, index) => (
          <button
            key={label}
            type="button"
            id={"ind-stage-tab-" + index}
            role="tab"
            aria-selected={active === index}
            aria-controls={"ind-stage-panel-" + index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={event => handleKeys(event, index)}
          >
            <PortfolioIcon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="ind-stage-panels" ref={panels}>
        {stages.map(({ label, title, detail, path }, index) => (
          <div
            className="ind-stage-panel"
            key={label}
            id={"ind-stage-panel-" + index}
            role="tabpanel"
            aria-labelledby={"ind-stage-tab-" + index}
            aria-hidden={active !== index}
            inert={active !== index}
            tabIndex={active === index ? 0 : -1}
          >
            <div className="ind-stage-copy">
              <p className="ind-label">Stage {index + 1} of {stages.length}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
            <div className="ind-stage-diagram">
              <div className="ind-stage-track" aria-hidden="true"><span /></div>
              <ol aria-label={label + " workflow"}>
                {path.map(({ icon, label: node }) => (
                  <li className="ind-stage-node" key={node}>
                    <span><PortfolioIcon name={icon} /></span>
                    {node}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
