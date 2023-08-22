---
sidebar_position: 2
---

# [HASH] bcryptjs 

## Basic start up 

https://www.npmjs.com/package/bcryptjs

```bash title="Terminal"
npm install bcryptjs
npm install --save @types/bcryptjs
```

## Hash and compare

```ts title="server.ts"
import { bcrypt } from 'bcryptjs';

const salt = 12; // Default is 10

// hash data
const hash: string = bcrypt.hashSync("data_that_want_to_hash", salt);

// compart hashed and incoming data
const isMatch: boolean = bcrypt.compareSync("incoming_data", hash);
```