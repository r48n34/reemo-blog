const express = require('express')
// const basicAuth = require('express-basic-auth')   

const app = express();

// app.use(basicAuth({
//     challenge: true,
//     users: { 'reemo': 'reemo214' }
// }))

app.use( "/", express.static( __dirname + "/build" ));

const PORT = 8084;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});