import { BskyAgent } from 'npm:@atproto/api';
// import * as dotenv from 'dotenv';
import * as process from 'node:process';

const port = parseInt(Deno.env.get("PORT") ?? "8000");

function hello_world(_req: Request): Response {
    return new Response("Hello, world!");
}

// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
  })


async function main() {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: ":)"
    });
    console.log("Just posted!")
}

main()
