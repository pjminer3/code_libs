const path = require("path");
const app = require("express")();
const http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});