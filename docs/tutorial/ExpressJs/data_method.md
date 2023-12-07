---
sidebar_position: 4
---

# [Basic] Data method

## Params

### Single Params
```ts showLineNumbers title="[GET] http://localhost:8080/api/13"
// Single params
app.get("/api/:id", function (req: Request, res: Response) {
  const { id } = req.params; // 13
  res.json({ data: id });
});
```

### Multi params
```ts showLineNumbers title="[GET] http://localhost:8080/api/13/peter"
// Single params
app.get("/api/:id/:name", function (req: Request, res: Response) {
  const { id, name } = req.params; // 13, peter
  res.json({ data: id, name: name });
});
```

## Query

### Single Query
```ts showLineNumber title="[GET] http://localhost:8080/api?id=14"
// Single Query
app.get("/api", function (req: Request, res: Response) {
  const { id } = req.query; // 14
  res.json({ data: id });
});
```

### Multi Query
```ts showLineNumbers title="[GET] http://localhost:8080/api?id=14&name=tom"
// Single params
app.get("/api/:id/:name", function (req: Request, res: Response) {
  const { id, name } = req.query; // 14, tom
  res.json({ data: id, name: name });
});
```

## Body

### Json data
```ts showLineNumber title="server.ts"
// Add these line to your server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

```ts showLineNumbers title="[POST] http://localhost:8080/api"
app.post('/api', function (req, res) {
  console.log(req.body);
  res.json({ data: id, name: name });
});
```

```js showLineNumbers title="frontend"
const res = await fetch( "http://localhost:8080/api" ,{
  method:"POST",
  headers:{ 
    // Authorization: `Bearer ${token}`,
    "Content-Type":"application/json"
  },
  body: JSON.stringify(formObject);
});
```

### multipart/form-data

With `formidable`  
https://www.npmjs.com/package/formidable#readme  

```ts showLineNumbers title="formidable.ts"
import path from "path"
import fs from "fs"
import formidable, { Fields, Files } from "formidable";
import IncomingForm from "formidable/Formidable";
import { Request } from "express"

// Create a folder if not exist
const uploadDir = "uploads"
const finalDir = path.join(__dirname, "..", uploadDir)
if (!fs.existsSync(finalDir)) {
    fs.mkdirSync(finalDir)
}

export const form = formidable({ 
    multiples: true,
    uploadDir: finalDir,
    keepExtensions: true,
    maxFileSize: 1024 * 1024 * 20, // (20mb)
    maxFiles: 1,
    filter: part => part.mimetype?.startsWith('image/') || false,
    filename: (originalName, originalExt, part, form) => {
        const ext = part.mimetype?.split("/").pop();
        return `${part.name}-${Date.now()}.${ext}`;
    },
});

export function formParse(form: IncomingForm, req: Request) {
    return new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } 
        resolve({ fields, files });
      });
    });
}
```

```ts showLineNumbers title="server.ts"
import { formParse } from "formidable"

// [POST] http://localhost:8080/data
app.post('/data', async (req: express.Request, res: express.Response) => {
  try{
    const data = await formParse(form, req);
    
    return res.status(200).json({ 
      status: true,
      bodyData:  data.fields, // data.fields : The original form data (No Files)
      filesData: data.files   // data.files : The media file data from form (Files)
    })
  }
  catch(err:any){
    return res.status(200).json({ status: false })
  }  
});
```
