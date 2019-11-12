const app = require("./app");

app.set("port", process.env.PORT || 3000);

const server = app.listen(app.get("port"), (req, res) => {
  console.log(`Server listening on http://127.0.0.1:${server.address().port}`);
});
