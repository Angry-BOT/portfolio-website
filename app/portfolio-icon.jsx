const marks = {
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 12h18m-11 0v2h4v-2" /></>,
  harness: <><path d="m8 6-5 6 5 6m8-12 5 6-5 6M13.5 4l-3 16" /></>,
  architecture: <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /><rect x="14" y="16" width="7" height="5" rx="1" /><path d="M12 8v4m-5.5 4v-4h11v4" /></>,
  review: <><circle cx="8" cy="7" r="3" /><path d="M2.5 19v-2a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v2m2-6 2 2 4-5" /></>,
  puzzle: <path d="M9 3h6v3a2 2 0 1 0 4 0h2v7h-3a2 2 0 1 0 0 4v4h-7v-3a2 2 0 1 0-4 0H3v-7h3a2 2 0 1 0 0-4V3z" />,
  gamepad: <><path d="M8 7h8c3 0 4.5 2.4 5 5l.7 3.5c.4 2-1.8 3.4-3.3 2l-2.1-2H7.7l-2.1 2c-1.5 1.4-3.7 0-3.3-2L3 12c.5-2.6 2-5 5-5Z" /><path d="M8 10v4m-2-2h4m5-1h.01m3 2h.01" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 3v3m6-3v3m-6 12v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" /></>,
  spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm6 12 1 2.8L22 18l-3 1-1 3-1-3-3-1 3-1.2 1-2.8Z" />,
  book: <><path d="M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14" /><path d="M6 8h3m-3 4h3m6-4h3m-3 4h3" /></>,
  work: <><rect x="3" y="4.5" width="18" height="15" rx="2" /><path d="M3 9.5h18M7 7h.01m3 0h.01" /></>,
  github: <><path d="M9 19c-3.5 1-3.5-1.8-5-2.2M15 21v-3.1c0-.8.3-1.4.7-1.9 2.4-.3 4.8-1.2 4.8-5.3a4.2 4.2 0 0 0-1.1-2.9c.1-.3.5-1.5-.2-2.8 0 0-1-.3-3 1.1a11 11 0 0 0-5.4 0c-2-1.4-3-1.1-3-1.1-.7 1.3-.3 2.5-.2 2.8a4.2 4.2 0 0 0-1.1 2.9c0 4 2.4 5 4.8 5.3.4.5.7 1.1.7 1.9V21" /></>,
  linkedin: <><path d="M5.5 9.5V20m5-10.5V20m0-6.5c0-2.2 1.4-4 3.8-4 2.5 0 4.2 1.7 4.2 4.2V20" /><circle cx="5.5" cy="5.5" r="1" /></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  document: <><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6" /></>,
  crawl: <><path d="M4 5h6v6H4zm10 8h6v6h-6zM10 8h6a1 1 0 0 1 1 1v4m-3 3H8a1 1 0 0 1-1-1v-4" /></>,
  sensor: <><path d="M4 19h16M5 14l4-4 4 2 6-6M15 6h4v4" /></>,
  location: <><path d="M19 10c0 5.2-7 10.5-7 10.5S5 15.2 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
};

export default function PortfolioIcon({ name }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {marks[name]}
    </svg>
  );
}
