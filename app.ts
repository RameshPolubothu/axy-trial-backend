import { serve } from "https://deno.land/std@0.196.0/http/server.ts";
import { connectDB, closeDB } from "./database/db.ts"; 
// Request handler function
function requestHandler(_req: Request): Response {
  return new Response("Hello, I'm a Deno server!");
}
// Adjust the path as needed

await connectDB();

// Your application logic goes here

// When you are done, close the database connection
await closeDB();

// Serve the requestHandler on port 8000
serve(requestHandler, { port: 8000 });

console.log("HTTP server is running at http://localhost:8000/");
