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

### Before apply
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
