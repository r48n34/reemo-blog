---
sidebar_position: 2
---

# Gemini Deno

## Config

Create a gemini api key from here:     
https://ai.google.dev/tutorials/node_quickstart      

Then goto:    
https://dash.deno.com/projects  

Add the key in `Settings -> Environment Variables`
```bash
GOOGLE_AI_API_KEY=xxxxxxxxxxxx
```

## Code
```ts showLineNumbers title="server.ts"
import { GoogleGenerativeAI } from "npm:@google/generative-ai";

export const genAI = new GoogleGenerativeAI(Deno.env.get("GOOGLE_AI_API_KEY") || "");

export async function aiPredictUtil(request: Request): Promise<string> {

    try{
        if (request.method !== "POST") {
            throw new Error("Method not allow")
        }

        const body = await request.text();
        const { prompt } = JSON.parse(body);

        if(!prompt){
            throw new Error("Invalid input params")
        }

        const generationConfig = {
            maxOutputTokens: 1024,
            temperature: 0.9,
        };

        const model = genAI.getGenerativeModel({ 
            model: "gemini-pro",
            generationConfig
        });
    
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return new Response(JSON.stringify({ status: true, data: text }), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        })
    }
    catch(error: any){
        return new Response(JSON.stringify({ status: false, msg: error.message }), {
            status: 500,
            headers: {
                "content-type": "application/json",
            },
        })
    }

}

Deno.serve((request) => aiPredictUtil(request));
```