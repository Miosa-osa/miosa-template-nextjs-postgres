# nextjs-postgres

A minimal Next.js 15 app (App Router, TypeScript) that talks to PostgreSQL.
It is a starting point for MIOSA Services and builds with Railpack without any configuration.

## Endpoints

- `GET /` returns 200 and shows whether the database is reachable.
- `GET /api/health` returns JSON; 503 only when `DATABASE_URL` is set but the database cannot be reached.

## Variables

| Name | Required | Meaning |
| --- | --- | --- |
| `DATABASE_URL` | for the database features | PostgreSQL connection string, for example `postgres://user:password@host:5432/dbname` |
| `PORT` | no (default 3000) | Port to listen on; the platform sets it |

The app starts and serves `/` without `DATABASE_URL`; it reports `not configured`.

## Run locally

```sh
npm install
npm run dev
```

Production: `npm run build && npm start`. Node 22.

## License

MIT
