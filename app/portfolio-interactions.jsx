"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function PortfolioInteractions() {
  useEffect(() => mountPortfolio(document.getElementById("sd-indigo")), []);
  return null;
}

function mountPortfolio(root) {
  if (!root) return;
  const listeners = new AbortController();
  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, { ...options, signal: options?.signal ?? listeners.signal });
  };
  const find = selector => root.querySelector(selector);
  const motion = gsap;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  const mobileHeader = matchMedia("(max-width: 680px)");
  const canAnimate = () => Boolean(motion && !reduced.matches);
  const head = find(".ind-head");
  const hero = find(".ind-hero");
  const nav = head.querySelector(".ind-nav-links");
  const navLinks = Array.from(nav.querySelectorAll("a"));
  const navTargets = [
    { hash: "#ind-about", section: find("#about") },
    { hash: "#ind-project-index", section: find(".ind-project-index") },
    { hash: "#ind-contact", section: find("#contact") },
  ];
  const contact = find(".ind-quick-contact");
  const logo = find(".ind-logo");
  const name = find(".ind-wordmark-text");

  function swap(incoming, outgoing) {
    if (!canAnimate()) return;
    const elements = [incoming, outgoing];
    motion.killTweensOf(elements);
    const done = "transform,opacity,visibility";
    motion.fromTo(incoming, {autoAlpha:0,y:7,scale:.96}, {autoAlpha:1,y:0,scale:1,duration:.33,ease:"power3.out",clearProps:done});
    motion.fromTo(outgoing, {autoAlpha:1,y:0,scale:1}, {autoAlpha:0,y:-7,scale:.96,duration:.22,ease:"power2.out",clearProps:done});
  }

  let scrollFrame = 0;
  let activeHash;
  function updateHeader() {
    scrollFrame = 0;
    const atEnd = document.documentElement.scrollHeight - innerHeight - scrollY <= 32;
    const activeTarget = atEnd ? navTargets.at(-1) : navTargets.findLast(({ section }) =>
      section.getBoundingClientRect().top <= head.offsetHeight + 22
    );
    if (activeTarget?.hash !== activeHash) {
      activeHash = activeTarget?.hash;
      navLinks.forEach(link => {
        if (link.hash === activeHash) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    const compact = !mobileHeader.matches && hero.getBoundingClientRect().bottom < Math.min(innerHeight * .48, 360);
    if (compact === head.classList.contains("is-compact") || (!mobileHeader.matches && head.querySelector(":focus-visible"))) return;
    head.classList.toggle("is-compact", compact);
    nav.inert = compact;
    contact.inert = !compact;
    if (mobileHeader.matches) {
      motion.killTweensOf([nav, contact, logo, name]);
      motion.set([nav, contact, logo, name], { clearProps: "transform,opacity,visibility" });
      return;
    }
    swap(compact ? contact : nav, compact ? nav : contact);
    swap(compact ? logo : name, compact ? name : logo);
  }
  function scheduleHeader() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader);
  }
  listen(window,"scroll", scheduleHeader, {passive:true});
  listen(window,"resize", scheduleHeader, {passive:true});
  listen(window,"hashchange", scheduleHeader);
  listen(document,"scrollend", scheduleHeader);
  listen(head,"focusout", scheduleHeader);
  updateHeader();
  function showName(show) {
    if (!head.classList.contains("is-compact")) return;
    head.classList.toggle("show-name", show);
    swap(show ? name : logo, show ? logo : name);
  }
  const wordmark = find(".ind-mark");
  listen(wordmark,"pointerenter", () => showName(true));
  listen(wordmark,"pointerleave", () => showName(wordmark.matches(":focus-visible")));
  listen(wordmark,"focus", () => showName(true));
  listen(wordmark,"blur", () => showName(wordmark.matches(":hover")));

  const profile = find(".ind-profile");
  const profileTrigger = profile.querySelector("button");
  const profileLinks = find(".ind-profile-links");
  const profileActions = Array.from(profileLinks.querySelectorAll("a"));
  let pinned = false;
  let profileAnimation;

  function clearProfileAnimation() {
    const animation = profileAnimation;
    profileAnimation = undefined;
    animation?.revert();
  }

  function createProfileAnimation() {
    const destinations = profileActions.map(link => ({
      x: profileLinks.clientWidth / 2 - link.offsetLeft,
      y: profileLinks.clientHeight / 2 - link.offsetTop,
    }));
    const openScale = Number(getComputedStyle(profile).getPropertyValue("--portrait-open-scale"));

    return motion.timeline({ paused: true, onReverseComplete: clearProfileAnimation })
      .fromTo(profileTrigger, { scale: 1 }, { scale: openScale, duration: .36, ease: "power3.out" }, 0)
      .fromTo(profileActions, {
        x: i => destinations[i].x, y: i => destinations[i].y, scale: .48, autoAlpha: 0,
      }, {
        x: 0, y: 0, scale: 1, autoAlpha: 1, duration: .44,
        stagger: { each: .045, from: "center" }, ease: "back.out(1.12)",
      }, .03);
  }

  function toggleProfile(open) {
    if (profile.classList.contains("is-open") === open) return;
    profile.classList.toggle("is-open", open);
    profileTrigger.setAttribute("aria-expanded", String(open));
    profileLinks.inert = !open;
    if (!canAnimate()) return;
    if (open) {
      profileAnimation ??= createProfileAnimation();
      profileAnimation.play();
    } else {
      profileAnimation?.reverse();
    }
  }
  listen(profile,"pointerenter", event => { if (event.pointerType === "mouse" && fine.matches) toggleProfile(true); });
  listen(profile,"pointerleave", () => { if (!pinned && !profileLinks.contains(document.activeElement)) toggleProfile(false); });
  listen(profileTrigger,"click", () => { pinned=!pinned; toggleProfile(pinned); });
  listen(profile,"keydown", event => {
    if (event.key === "Escape") { pinned=false; profileTrigger.focus(); toggleProfile(false); }
  });
  listen(profile,"focusout", event => {
    if (!profile.contains(event.relatedTarget) && !profile.matches(":hover")) { pinned=false; toggleProfile(false); }
  });
  listen(document,"pointerdown", event => {
    if (!profile.contains(event.target)) { pinned=false; toggleProfile(false); }
  });

  const employers = find(".ind-companies");
  const hoverEmployer = find(".ind-employer-float");
  const selectedEmployer = find(".ind-employer-selection");
  const employerButtons = Array.from(employers.querySelectorAll("button[data-employer]"));
  function copyContent(panel, source) {
    panel.replaceChildren(...Array.from(source.childNodes, child => child.cloneNode(true)));
  }
  function fillEmployer(panel, button) {
    copyContent(panel, find(button.dataset.employer));
  }
  function hideEmployer() {
    if (motion) motion.to(hoverEmployer,{autoAlpha:0,scale:.97,duration:canAnimate()?.18:0,overwrite:true});
    else hoverEmployer.style.visibility="hidden";
  }
  function placeEmployer(event, immediate=false) {
    const bounds=employers.getBoundingClientRect();
    const x=Math.max(0,Math.min(event.clientX-bounds.left+16,bounds.width-hoverEmployer.offsetWidth));
    const y=event.clientY-bounds.top+(event.clientY+hoverEmployer.offsetHeight+20>innerHeight?-hoverEmployer.offsetHeight-12:18);
    if (motion) {
      if (immediate || !canAnimate()) motion.set(hoverEmployer,{x,y});
      else motion.to(hoverEmployer,{x,y,duration:.26,ease:"power3.out",overwrite:"auto"});
    } else hoverEmployer.style.transform=`translate(${x}px,${y}px)`;
  }
  const employerLogos = employerButtons.map(button => button.querySelector(".ind-employer-logo"));

  function animateEmployerLogo(button, tapped = false) {
    if (!canAnimate()) return;
    const mark = button.querySelector(".ind-employer-logo");
    motion.killTweensOf(mark);
    motion.timeline()
      .to(mark, { y: tapped ? -3 : -5, scale: 1.08, duration: .18, ease: "power2.out" })
      .to(mark, { y: 0, scale: 1, duration: .34, ease: "back.out(1.6)", clearProps: "transform" });
  }
  listen(reduced, "change", () => {
    motion.killTweensOf(employerLogos);
    motion.set(employerLogos, { clearProps: "transform" });
  });

  employerButtons.forEach(button => {
    listen(button,"pointerenter", event => {
      if (event.pointerType !== "mouse" || !fine.matches) return;
      animateEmployerLogo(button);
      if (mobileHeader.matches || button.getAttribute("aria-expanded") === "true") return;
      fillEmployer(hoverEmployer,button);
      placeEmployer(event,true);
      if (motion) motion.fromTo(hoverEmployer,{autoAlpha:0,scale:.96},{autoAlpha:1,scale:1,duration:canAnimate()?.28:0,ease:"power3.out",overwrite:"auto"});
      else { hoverEmployer.style.opacity=1; hoverEmployer.style.visibility="visible"; }
    });
    listen(button,"pointermove", event => {
      if (event.pointerType === "mouse" && fine.matches && !mobileHeader.matches) placeEmployer(event);
    });
    listen(button,"pointerleave",hideEmployer);
    listen(button,"click", () => {
      animateEmployerLogo(button, true);
      const open=button.getAttribute("aria-expanded")!=="true";
      employerButtons.forEach(item=>item.setAttribute("aria-expanded",String(open&&item===button)));
      selectedEmployer.hidden=!open;
      hideEmployer();
      if (open) {
        fillEmployer(selectedEmployer,button);
        selectedEmployer.setAttribute("aria-labelledby",button.id);
        if (canAnimate()) motion.fromTo(selectedEmployer,{opacity:0,y:9},{opacity:1,y:0,duration:.28,ease:"power2.out",clearProps:"transform,opacity",overwrite:true});
      }
    });
  });
  listen(employers,"keydown", event => {
    if (event.key !== "Escape") return;
    employerButtons.find(button => button.getAttribute("aria-expanded")==="true")?.click();
    hideEmployer();
  });

  const index=find(".ind-project-index");
  const preview=find(".ind-hover-preview");
  function movePreview(event, immediate = false) {
    const bounds = index.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - bounds.left + 24, bounds.width - preview.offsetWidth));
    const y = Math.max(-80, Math.min(event.clientY - bounds.top - preview.offsetHeight * .78, bounds.height - preview.offsetHeight));
    if (immediate) motion.set(preview, { x, y });
    else motion.to(preview, { x, y, duration: .27, ease: "power3.out", overwrite: "auto" });
  }
  const canPreview = event => !mobileHeader.matches && canAnimate() && fine.matches && event.pointerType === "mouse";

  index.querySelectorAll("[data-preview]").forEach(row => {
    listen(row, "pointerenter", event => {
      if (!canPreview(event)) return;
      copyContent(preview, find(row.dataset.preview));
      movePreview(event, true);
      motion.fromTo(preview, { autoAlpha: 0, scale: .965 }, { autoAlpha: 1, scale: 1, duration: .24, ease: "power3.out", overwrite: "auto" });
    });
    listen(row, "pointermove", event => {
      if (canPreview(event)) movePreview(event);
    });
    listen(row, "pointerleave", () => {
      if (!canAnimate()) return;
      motion.killTweensOf(preview);
      motion.to(preview, { autoAlpha: 0, duration: .16, overwrite: "auto" });
    });
  });

  function openLinkedDetails(hash) {
    const target = document.getElementById(hash.slice(1));
    if (target?.matches(".ind-employer-button[aria-expanded=false]")) target.click();
  }

  listen(window, "hashchange", () => openLinkedDetails(window.location.hash));
  openLinkedDetails(window.location.hash);

  if (!motion) return;
  const media=motion.matchMedia();
  const seen=new WeakSet();
  let introduced=false;
  media.add("(prefers-reduced-motion: no-preference)", context => {
    let entry;
    context.add("opening", () => {
      hero.classList.add("is-entering");
      entry = motion.timeline({
        defaults: { ease: "power3.out", clearProps: "transform,opacity" },
        onComplete: () => hero.classList.remove("is-entering"),
      });
      entry.from(".ind-profile", { opacity: .22, y: 10, duration: .56 }, 0)
        .from(".ind-intro", { opacity: .22, y: 10, duration: .56 }, .08)
        .from("#ind-title b", { opacity: .2, yPercent: 78, duration: .82 }, .18)
        .from("#ind-title em", { opacity: .2, yPercent: 78, duration: .82 }, .29)
        .from(".ind-summary,.ind-hero-action", { opacity: .32, y: 10, duration: .55, stagger: .07 }, .53);
    });
    if (!introduced) {
      introduced = true;
      context.opening();
    }

    const wash = find(".ind-page-wash");
    const position = () => {
      const distance = document.documentElement.scrollHeight - innerHeight;
      const progress = distance > 0 ? motion.utils.clamp(0, 1, scrollY / distance) : 0;
      return { xPercent: -6 * progress, yPercent: 4 * progress };
    };
    motion.set(wash, position());
    const horizontal = motion.quickTo(wash, "xPercent", { duration: .85, ease: "power2.out" });
    const vertical = motion.quickTo(wash, "yPercent", { duration: .85, ease: "power2.out" });
    const driftGradient = () => {
      const { xPercent, yPercent } = position();
      horizontal(xPercent);
      vertical(yPercent);
    };
    const interact=new AbortController();
    const options={signal:interact.signal};
    listen(window, "scroll", driftGradient, { ...options, passive: true });
    listen(window, "resize", driftGradient, options);
    context.add("letter", (slot,direction) => {
      const glyph=slot.firstElementChild;
      if(motion.isTweening(glyph))return;
      const travel=innerWidth<681?7:13;
      motion.timeline({onComplete:()=>motion.set(glyph,{clearProps:"transform,filter"})})
        .to(glyph,{x:direction*travel,y:-travel*.78,rotate:direction*8,filter:"blur(.42px)",duration:.24,ease:"power2.out"})
        .to(glyph,{x:0,y:0,rotate:0,filter:"blur(0px)",duration:.39,ease:"back.out(1.45)"});
    });
    root.querySelectorAll(".ind-letter").forEach(slot=>listen(slot,"pointerenter",event=>{
      if(event.pointerType==="mouse"&&fine.matches)context.letter(slot,event.clientX<slot.getBoundingClientRect().left+slot.offsetWidth/2?1:-1);
    },options));
    find(".ind-footer-title").addEventListener("focus",event=>{
      if(event.currentTarget.matches(":focus-visible")) Array.from(event.currentTarget.querySelectorAll(".ind-letter")).slice(0,5).forEach((slot,i)=>context.letter(slot,i%2===0?1:-1));
    },options);
    context.add("rise", heading => {
      const lines = heading.querySelector(".ind-footer-title")?.children ?? heading.children;
      motion.from(lines, {
        opacity: .32, y: 15, stagger: .085, duration: .61,
        ease: "power3.out", clearProps: "transform,opacity",
      });
    });
    const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
      if(!isIntersecting)return;
      seen.add(target);observer.unobserve(target);context.rise(target);
    }),{threshold:.20});
    root.querySelectorAll("[data-text-reveal]").forEach(heading => {
      if (!seen.has(heading)) observer.observe(heading);
    });
    return ()=>{
      observer.disconnect();
      interact.abort();
      horizontal.tween.kill();
      vertical.tween.kill();
      entry?.revert();
      hero.classList.remove("is-entering");
      clearProfileAnimation();
      motion.killTweensOf([hoverEmployer,preview,nav,contact,logo,name,selectedEmployer]);
      motion.set([hoverEmployer,preview,nav,contact,logo,name,selectedEmployer],{clearProps:"transform,opacity,visibility"});
    };
  },root);

  root.dataset.interactive = "true";
  return () => {
    delete root.dataset.interactive;
    listeners.abort();
    cancelAnimationFrame(scrollFrame);
    media.revert();
    clearProfileAnimation();
    motion.killTweensOf([hoverEmployer, preview, nav, contact, logo, name, selectedEmployer, ...employerLogos]);
    motion.set(employerLogos, { clearProps: "transform" });
  };
}
