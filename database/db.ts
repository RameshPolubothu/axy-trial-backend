import { Client } from "https://deno.land/x/postgres/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load environment variables
const env = config();
const client = new Client({
  hostname: "pg-2764c55b-iitdh-887c.j.aivencloud.com",
  port: 19498,
  user: "avnadmin",
  password: env.DATABASE_URL,
  database: "defaultdb",
  ssl: { 
    require: true,         // Require SSL
    rejectUnauthorized: false // Bypass untrusted certificates (for development only)
  },
});

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

export async function closeDB() {
  await client.end();
}
