const express = require("express"),
  port = process.env.port || 9090,
  path = require("path"),
  app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`listening on ${port}`));
