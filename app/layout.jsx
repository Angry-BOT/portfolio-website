import "./portfolio.css";
import "./assistant.css";
import { initializeTheme } from "./theme-preference";

export const metadata = {
  title: "Shailesh Das | Software Engineer",
  description:
    "Shailesh Das builds products and AI agents for real workflows. Explore his engineering work, experience, and projects.",
  openGraph: {
    type: "website",
    title: "Shailesh Das | Software Engineer",
    description: "Selected projects, engineering experience, and ways to get in touch.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
        {children}
      </body>
    </html>
  );
}
