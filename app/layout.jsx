import "./portfolio.css";
import "./assistant.css";

export const metadata = {
  title: "Shailesh Das | Software Engineer",
  description:
    "Shailesh Das builds products and AI agents for real workflows. Explore his engineering work, experience, and projects.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Shailesh Das | Software Engineer",
    description: "Selected projects, engineering experience, and ways to get in touch.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
