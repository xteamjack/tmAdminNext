import { PrismaClient } from "@prisma/client";
export const db = globalThis.db || new PrismaClient();

// Reuse prisma client connections across hot reloads on dev environment
//  to avoid database connection errors due to connection pool exhaustion
if (process.env.NODE_ENV !== "production") globalThis.db = db;
