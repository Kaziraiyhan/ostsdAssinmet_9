const app = require("./app");
const dotenv = require("dotenv");

const PORT = process.env.RUNNING_PORT || 8000;

const Db = require("./src/Controllers/db");
const string = "mongodb://localhost:27017";
app.get("/", (_req, res) => {
  res.send(" Home page get");
});

Db(string)
  .then(() => {
    console.log("Database connect secsussfully");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch(() => {});
