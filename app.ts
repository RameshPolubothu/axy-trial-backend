import { serve } from "https://deno.land/std@0.196.0/http/server.ts";

// Request handler function
function requestHandler(_req: Request): Response {
  return new Response("Hello, I'm a Deno server!");
}

// Serve the requestHandler on port 8000
serve(requestHandler, { port: 8000 });

console.log("HTTP server is running at http://localhost:8000/");
