import { MongoClient } from "mongodb";
import { clientPromise } from "@/lib/db/mongo";

export async function getAll() {
  try {
    const client: Promise<MongoClient> = await clientPromise;
    const db = client.db("talent_map");
    const clients = await db.collection("clients").find({}).toArray();

    return {
      meta: {
        status: "success",
        operation: "db_fetch",
      },
      data: {
        clients: {
          total: clients.length,
          fetch: clients.length,
          start: 1,
          end: clients.length,
          page: {
            current: 1,
            total: 1,
            length: 1,
          },
          records: JSON.parse(JSON.stringify(clients)),
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      meta: {
        status: "error",
        info: "Data fetch failed",
        error,
      },
      data: { clients: [] },
    };
  }
}
