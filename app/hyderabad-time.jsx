"use client";

import { useEffect, useState } from "react";

const localTime = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export default function HyderabadTime() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    let timer;
    const refresh = () => {
      clearTimeout(timer);
      const current = new Date();
      setNow(current);
      timer = setTimeout(refresh, 60_000 - current.getTime() % 60_000);
    };
    refresh();
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  if (!now) return null;

  return (
    <span className="ind-local-time">
      <span aria-hidden="true"> · </span>
      <time dateTime={now.toISOString()}>{localTime.format(now).toUpperCase()} IST</time>
    </span>
  );
}
