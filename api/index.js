const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server ready on port 3000."));
module.exports = app;
