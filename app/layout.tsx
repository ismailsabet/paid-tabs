import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import AuthCheck from "../components/auth-check";
import Header from "../components/header";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "PaidTabs",
    template: "%s - PaidTabs",
  },
  description: "All-in-one platfrom for sheet music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthCheck>
          <Header />
          <main className="site-content">
            <div className="container">{children}</div>
          </main>
        </AuthCheck>
      </body>
    </html>
  );
}
