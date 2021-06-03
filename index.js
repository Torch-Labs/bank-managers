/**
 * To run the code: npm run start
 *
 * bank manager database: bank_manager_data.json
 */

// dependancies
const app = require("express")();
const PORT = 5000;
//  const fetch = require("node-fetch");
//  const managers = require("./bank_manager_data.json");

// base endpoint
app.get("/:manager", async (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on localhost:${PORT}`);
});
