import { clientPromise } from "@/lib/db/mongo";
import { count } from "console";

export async function getAll() {
  try {
    const client = await clientPromise;
    const db = client.db("talent_map");
    const clients = await db.collection("clients").find({}).toArray();

    return {
      meta: {
        status: "success",
        operation: "db_fetch",
      },
      data: {
        clients: {
          count: clients.length,
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
