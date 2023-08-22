---
sidebar_position: 2
---

# [DB] pg 

## Basic start up 

https://www.npmjs.com/package/pg 

```bash title="Terminal"
npm install pg
```

## Connect and run query

```ts title="server.ts"
import { Client } from 'pg';

export const client = new Client({
    database: "test_db",
    user: "postgres",
    password: "my_passowrd_123"
});

( async () => {
    const result = await client.query('SELECT * from users where username = $1', ["tom"]);
    const dataArr = result.rows
})()
```