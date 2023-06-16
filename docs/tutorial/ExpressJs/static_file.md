---
sidebar_position: 1
---

# [Basic] Static File 

## Folder Structure
Let's assume you have a folder like this
```md
.
├── server.ts
├── package.json
├── tsconfig.json
├── uploads
│   ├── cars
│   │   ├──coolCars.jpeg 
│   │   ├── moreCarFolder
│   │   │     └── cuteCar.jpeg 
│   │   └── adorableBMW.gif
│   ├── yolo.jpeg 
│   ├── hello.html 
│   └── mouse
│        └── music.mp3 
└── public
    ├── index.js
    ├── index.html
    └── index.css
```

## Usage

```ts showLineNumbers title="server.ts"
import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/api", function (req: Request, res: Response) {
    res.end("Hello mom!");
});

// highlight-start
// Add this line
app.use(express.static("public"));
app.use('/uploads', express.static("uploads"))
// highlight-end

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
```

To get the specific file, you may follow the regarind pattens
```md
app.use(express.static("public"));
app.use('/uploads', express.static("uploads"))

index.html
http://localhost:8080/

yolo.jpeg
http://localhost:8080/uploads/yolo.jpeg

music.mp3
http://localhost:8080/uploads/mouse/music.mp3 

adorableBMW.gif
http://localhost:8080/uploads/cars/adorableBMW.gif

cuteCar.jpeg
http://localhost:8080/uploads/cars/moreCarFolder/cuteCar.jpeg
```

## `express.static()`

```ts
// Normal ways
app.use(express.static("public")); // Defaulf is "/" path
app.use('/uploads', express.static("uploads"))


// Safe ways
import path from "path"

let uploadDir = path.join(__dirname, 'uploads')
app.use('/uploads', express.static(uploadDir))
```