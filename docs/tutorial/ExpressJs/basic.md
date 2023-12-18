---
sidebar_position: 1
---

# [Basic] Basic 

## Basic start-up
This tutorial will guild to create a simple `express.js` web server from scratch with `typescript`.

```bash title="Terminal"
npm init -y

npm install express
npm install -D ts-node typescript @types/node @types/express
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "target": "es6",
    "outDir": "dist",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "noUnusedLocals": true
  },
  "exclude": ["node_modules", "test", "dist"]
}
```

## - Code

```ts title="server.ts"
import express, { Request, Response } from "express";

const app = express();

// http://localhost:8080/
app.get("/", function (req: Request, res: Response) {
    res.end("Hello mom!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
```

After created the `server.ts`, type the following command in the terminal.  
```bash title="Terminal"
ts-node server.ts
```

## Folder Structure
```md
.
├── 📂 node_modules
├── server.ts
├── package.json
└── tsconfig.json
```