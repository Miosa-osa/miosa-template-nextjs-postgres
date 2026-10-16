import { Pool } from "pg";

let pool: Pool | undefined;

/** One shared pool per process. Returns null when DATABASE_URL is not set. */
export function getPool(): Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  pool ??= new Pool({ connectionString: url, max: 5, connectionTimeoutMillis: 3000 });
  return pool;
}

export type DbStatus = "not configured" | "connected" | "unreachable";

export async function dbStatus(): Promise<DbStatus> {
  const p = getPool();
  if (!p) return "not configured";
  try {
    await p.query("select 1");
    return "connected";
  } catch {
    return "unreachable";
  }
}
