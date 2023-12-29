---
sidebar_position: 1
---

# Gemini NodeJs

## Config

Create a gemini api key from here:   
https://ai.google.dev/tutorials/node_quickstart    

```bash showLineNumbers title=".env"
GOOGLE_AI_API_KEY=xxxxxxxxxxxx
```

Then add the library with 

```bash
yarn add @google/generative-ai dotenv
```

## Code

```ts showLineNumbers title="openat.ts"
import * as dotenv from 'dotenv'
dotenv.config()

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

( async () => {
    try {

        const prompt = "Hello google ai!"

        const generationConfig = {
            maxOutputTokens: 512,
            temperature: 0.1,
        };

        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            generationConfig
        });

        const result = await model.generateContent(prompt);

        const response = await result.response;
        const text = response.text();
    
        // highlight-next-line
        console.log(text); // hello mate, what can i help you?
    }
    catch (error) {
        console.log(error);
    }
})()
```