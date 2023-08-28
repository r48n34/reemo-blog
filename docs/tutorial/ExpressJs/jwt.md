---
sidebar_position: 5
---

# [Adv] JWT for authentication

## Install
https://www.npmjs.com/package/jsonwebtoken

```bash
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken

yarn add permit
yarn add -D @types/permit
```

## Usage

### Jwt Utils

```ts showLineNumbers title="jwtUtils.ts"
import jwt from 'jsonwebtoken'

export const jwtConfig = {
    secret: "shhhhhhhhhhhh",
    sessionConfig: {
        expiresIn: "24h" 
    },
};


export function encodeDataToJwt(payload: object): string {
    return jwt.sign(
        payload,
        jwtConfig.secret,
        { ...jwtConfig.sessionConfig }
    );
}

export function decodeDataInJwt(token: string): object{
    return jwt.verify(token, jwtConfig.secret);
}
```

### Guard function 

```ts showLineNumbers title="guard.ts"
import { Bearer } from 'permit';
import { encodeDataToJwt } from './jwtUtils';

const permit = new Bearer({
    query: 'access_token',
})

export function isLoginGuard(
    req:express.Request,
    res:express.Response,
    next:express.NextFunction
){
    try {
        
        const token = permit.check(req);
    
        if(!token){
            throw new Error("Missing jwt token.")
        }
    
        const payload = decodeDataToJwt(token);
        console.log(payload);
        
        // Check users data here if you want

        return next();
    } 
    catch (error:any) {
        return res.status(401).json({ status: false, msg: "Permission Denied." });
    }

}
```

### Router usage

```ts showLineNumbers title="usersRouter.ts"
import express, { Request, Response } from "express";
import { encodeDataToJwt } from "./jwtUtils"
import { isLoginGuard } from "./guard"

export const usersRouter = express.Router();
    
usersRouter.get('/dummyLogin', (req: Request, res: Response) => {
    return res.status(200).json({ status: true, jwt: encodeDataToJwt({ name: "tom" }) })
});

usersRouter.get('/somePrivateApi', isLoginGuard , (req: Request, res: Response) => {
    return res.status(200).json({ status: true })
});
```

### Fetch with `curl`
```bash
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" https://localhost:8080/somePrivateApi
```