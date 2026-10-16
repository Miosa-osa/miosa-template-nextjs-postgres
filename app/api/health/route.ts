import { dbStatus } from "../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const database = await dbStatus();
  return Response.json({ ok: true, database }, { status: database === "unreachable" ? 503 : 200 });
}
