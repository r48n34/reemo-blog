---
sidebar_position: 1
---

# [Basic] Basic 

## Basic start up

```bash title="Terminal"
npm init -y

npm install express
npm install -D ts-node typescript @types/node
npm install -D @types/express
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "target": "es6",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "suppressImplicitAnyIndexErrors": true,
    "strictNullChecks": true,
    "noUnusedLocals": true
  },
  "exclude": ["node_modules", "test"]
}
```

## Code

```ts title="server.ts"
import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", function (req: Request, res: Response) {
    res.end("Hello mom!");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
```

```bash title="Terminal"
ts-node server.ts
```

## Folder Structure
```md
.
├── server.ts
├── package.json
└── tsconfig.json
```