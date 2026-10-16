import type { ReactNode } from "react";

export const metadata = { title: "Next.js + Postgres" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: "3rem auto", maxWidth: 640 }}>{children}</body>
    </html>
  );
}
