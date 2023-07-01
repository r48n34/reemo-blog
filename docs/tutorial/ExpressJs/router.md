---
sidebar_position: 3
---

# [Basic] Router

## Folder Structure
Let's assume you have a folder like this
```md
.
├── package.json
├── tsconfig.json
├── appleRouter.ts
├── orangeRouter.ts
└── server.ts
```

## Usage

```ts showLineNumbers title="server.ts"
import express from "express";
import { Request, Response } from "express";

// highlight-start
import { appleRouter } from "appleRouter"
import { orangeRouter } from "orangeRouter"
// highlight-end

const app = express();

app.get("/api", function (req: Request, res: Response) {
    res.end("Hello mom!");
});

// highlight-start
app.use("/apple", appleRouter);
app.use("/orange", orangeRouter);
// highlight-end

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
```

```ts showLineNumbers title="appleRouter.ts"
import express from "express";
import { Request, Response } from "express";

// highlight-start
export const appleRouter = express.Router();
// highlight-end

// http://localhost:8080/apple/hi
appleRouter.get('/hi', async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({ status: true, data: "Hi this is apple" })
  }
  catch(err:any){
    return res.status(200).json({ status: false })
  }      
});
```

```ts showLineNumbers title="orangeRouter.ts"
import express from "express";
import { Request, Response } from "express";

// highlight-start
export const orangeRouter = express.Router();
// highlight-end

// http://localhost:8080/orange/hi
orangeRouter.get('/hi', async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({ status: true, data: "Hi this is orange" })
  }
  catch(err:any){
    return res.status(200).json({ status: false })
  }      
});
```

