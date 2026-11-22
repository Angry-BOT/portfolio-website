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
  const canAnimate = () => Boolean(motion && !reduced.matches);
  const head = find(".ind-head");
  const hero = find(".ind-hero");
  const nav = head.querySelector("nav");
  const contact = find(".ind-quick-contact");
  const logo = find(".ind-logo");
  const name = find(".ind-wordmark-text");
  const dark = find(".ind-dark");

  function swap(incoming, outgoing) {
    if (!canAnimate()) return;
    const elements = [incoming, outgoing];
    motion.killTweensOf(elements);
    const done = "transform,opacity,visibility";
    motion.fromTo(incoming, {autoAlpha:0,y:7,scale:.96}, {autoAlpha:1,y:0,scale:1,duration:.33,ease:"power3.out",clearProps:done});
    motion.fromTo(outgoing, {autoAlpha:1,y:0,scale:1}, {autoAlpha:0,y:-7,scale:.96,duration:.22,ease:"power2.out",clearProps:done});
  }

  let scrollFrame = 0;
  function updateHeader() {
    scrollFrame = 0;
    const bounds = dark.getBoundingClientRect();
    const probe = head.getBoundingClientRect().top + head.offsetHeight / 2;
    const darkBehindHeader = bounds.top < probe && bounds.bottom > probe;
    const footerDominates = bounds.top < innerHeight * .42 && bounds.bottom > innerHeight * .74;
    head.classList.toggle("on-dark", darkBehindHeader || footerDominates);
    const compact = hero.getBoundingClientRect().bottom < Math.min(innerHeight * .48, 360);
    if (compact === head.classList.contains("is-compact") || head.querySelector(":focus-visible")) return;
    head.classList.toggle("is-compact", compact);
    nav.inert = compact;
    contact.inert = !compact;
    swap(compact ? contact : nav, compact ? nav : contact);
    swap(compact ? logo : name, compact ? name : logo);
  }
  function scheduleHeader() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader);
  }
  listen(window,"scroll", scheduleHeader, {passive:true});
  listen(window,"resize", scheduleHeader, {passive:true});
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
  const portrait = find(".ind-portrait");
  let pinned = false;
  function toggleProfile(open) {
    if (profile.classList.contains("is-open") === open) return;
    profile.classList.toggle("is-open", open);
    profileTrigger.setAttribute("aria-expanded", String(open));
    profileLinks.inert = !open;
    if (!canAnimate()) return;
    motion.killTweensOf([...profileActions,portrait]);
    const targets = profileActions.map(link => getComputedStyle(link));
    motion.to(portrait,{scale:open?1.045:1,duration:.32,ease:"power3.out",clearProps:"transform"});
    motion.fromTo(profileActions,{
      xPercent:-50,yPercent:-50,x:i=>open?0:parseFloat(targets[i].getPropertyValue("--fan-x")),
      y:i=>open?0:parseFloat(targets[i].getPropertyValue("--fan-y")),scale:open?.55:1,autoAlpha:open?0:1
    },{
      xPercent:-50,yPercent:-50,x:i=>open?parseFloat(targets[i].getPropertyValue("--fan-x")):0,
      y:i=>open?parseFloat(targets[i].getPropertyValue("--fan-y")):0,
      rotation:i=>open?parseFloat(targets[i].getPropertyValue("--fan-rotate")):0,
      scale:open?1:.55,autoAlpha:open?1:0,duration:open?.44:.28,stagger:open?.028:0,
      ease:open?"back.out(1.15)":"power2.inOut",clearProps:"transform,opacity,visibility"
    });
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
  employerButtons.forEach(button => {
    listen(button,"pointerenter", event => {
      if (event.pointerType!=="mouse" || !fine.matches || button.getAttribute("aria-expanded")==="true") return;
      fillEmployer(hoverEmployer,button);
      placeEmployer(event,true);
      if (motion) motion.fromTo(hoverEmployer,{autoAlpha:0,scale:.96},{autoAlpha:1,scale:1,duration:canAnimate()?.28:0,ease:"power3.out",overwrite:"auto"});
      else { hoverEmployer.style.opacity=1; hoverEmployer.style.visibility="visible"; }
    });
    listen(button,"pointermove", event => {
      if (event.pointerType==="mouse" && fine.matches) placeEmployer(event);
    });
    listen(button,"pointerleave",hideEmployer);
    listen(button,"click", () => {
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
  const canPreview = event => canAnimate() && fine.matches && event.pointerType === "mouse";

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

  function openProjectDetails(hash) {
    const target = document.getElementById(hash.slice(1));
    if (target?.matches("details.ind-project-notes")) target.open = true;
  }

  listen(root, "click", event => {
    if (event.defaultPrevented || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) return;
    const link = event.target.closest("a[data-open]");
    if (link) openProjectDetails(link.hash);
  });
  listen(window, "hashchange", () => openProjectDetails(window.location.hash));
  openProjectDetails(window.location.hash);

  if (!motion) return;
  const media=motion.matchMedia();
  const seen=new WeakSet();
  let introduced=false;
  media.add("(prefers-reduced-motion: no-preference)", context => {
    const replay=find(".ind-replay");
    let entry;
    context.add("opening",()=>{
      entry?.revert();
      entry=motion.timeline({defaults:{ease:"power3.out",clearProps:"transform,opacity"}});
      const travel=innerWidth<681?30:76;
      entry.from(".ind-profile",{opacity:0,y:-10,duration:.66},0)
        .from(".ind-intro",{opacity:0,y:10,duration:.58},.12)
        .from("#ind-title b",{opacity:0,x:-travel,duration:.96},.15)
        .from("#ind-title em",{opacity:0,x:travel,duration:.96},.30)
        .from(".ind-summary",{opacity:0,y:12,duration:.62},.56);
    });
    if(!introduced){introduced=true;context.opening();}
    const play=()=>{hero.scrollIntoView({block:"start",behavior:"instant"});context.opening();};
    replay.hidden=false;
    listen(replay,"click",play);
    motion.fromTo(".ind-ambient",{xPercent:-4,yPercent:-7,scale:.9},{xPercent:5,yPercent:5,scale:1.06,duration:22,repeat:-1,yoyo:true,ease:"sine.inOut"});
    const interact=new AbortController();
    const options={signal:interact.signal};
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
    context.add("capability",(card,show)=>{
      const tags=card.querySelectorAll(".ind-cap-tags span");
      motion.to(tags,{autoAlpha:show?1:0,y:show?0:10,scale:show?1:.94,duration:.29,stagger:show?.043:0,overwrite:"auto",ease:"power2.out"});
      motion.to(card.querySelector(".ind-cap-art img"),{rotation:show?-4:-8,scale:show?1.075:1,duration:.42,overwrite:"auto"});
      motion.to(card.querySelector(".ind-cap-shade"),{opacity:show?1:0,duration:.27,overwrite:"auto"});
    });
    root.querySelectorAll(".ind-visual-cap").forEach(card=>{
      motion.set(card.querySelectorAll(".ind-cap-tags span"),{autoAlpha:0,y:10,scale:.94});
      const refresh=()=>context.capability(card,card.open||card.matches(":focus-within")||(fine.matches&&card.matches(":hover")));
      ["pointerenter","pointerleave","focusin","toggle"].forEach(event=>listen(card,event,refresh,options));
      listen(card,"focusout",event=>{
        if(!card.contains(event.relatedTarget))context.capability(card,card.open||(fine.matches&&card.matches(":hover")));
      },options);
      refresh();
    });
    context.add("rise",element=>{
      const words=element.querySelectorAll("[data-word]");
      if(words.length)motion.from(words,{opacity:.27,y:16,duration:.55,stagger:.065,ease:"power3.out",clearProps:"transform,opacity"});
      else motion.from(element,{opacity:.55,y:20,duration:.62,ease:"power3.out",clearProps:"transform,opacity"});
    });
    const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
      if(!isIntersecting)return;
      seen.add(target);observer.unobserve(target);context.rise(target);
    }),{threshold:.20});
    root.querySelectorAll(".ind-companies,.ind-note .ind-split,.ind-capabilities,.ind-assistant,.ind-footer").forEach(el=>{if(!seen.has(el))observer.observe(el);});
    return ()=>{
      observer.disconnect();
      interact.abort();
      replay.hidden=true;
      replay.removeEventListener("click",play);
      motion.killTweensOf([hoverEmployer,preview,portrait,...profileActions,nav,contact,logo,name,selectedEmployer]);
      motion.set([hoverEmployer,preview,portrait,...profileActions,nav,contact,logo,name,selectedEmployer],{clearProps:"transform,opacity,visibility"});
    };
  },root);

  root.dataset.interactive = "true";
  return () => {
    delete root.dataset.interactive;
    listeners.abort();
    cancelAnimationFrame(scrollFrame);
    media.revert();
    motion.killTweensOf([hoverEmployer, preview, portrait, ...profileActions, nav, contact, logo, name, selectedEmployer]);
  };
}
