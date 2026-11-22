const marks = {
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
