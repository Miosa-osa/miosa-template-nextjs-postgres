import { dbStatus } from "../lib/db";

// Rendered per request so the database status is live, and so the build needs no database.
export const dynamic = "force-dynamic";

export default async function Home() {
  const status = await dbStatus();
  return (
    <main>
      <h1>Next.js + Postgres</h1>
      <p>Database: {status}</p>
    </main>
  );
}
