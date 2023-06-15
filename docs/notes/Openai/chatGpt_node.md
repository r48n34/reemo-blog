---
sidebar_position: 1
---

# Chat GPT NodeJs

Create a api key from here:   
https://platform.openai.com/account/api-keys    

```bash showLineNumbers title=".env"
OPEN_AI_APIKEY=xxxxxxxxxxxx
```

Then add the library with 

```bash
yarn add openai dotenv
```

```ts showLineNumbers title="openat.ts"
import { Configuration, OpenAIApi } from "openai"
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_APIKEY,
});

const openai = new OpenAIApi(configuration);

( async () => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Please ack like a Tom." }, // Role to apply 
                { role: "assistant", content: "Tom is a nice man" },   // References data
                { role: "user", content: "Hello world, can you make me a joke?" } // User questions
            ]
        });
    
        // highlight-next-line
        console.log(response.data.choices[0]); // hello mate
    }
    catch (error) {
        console.log(error);
    }
})()
```