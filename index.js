// npm run start

const app = require("express")();
const PORT = 5000;
// const fetch = require("node-fetch");
// const managers = require("./bank_manager_data.json");

/**
 * Requirement
 *
 * We have a database of bank managers, where each contains a list of bank account IDs which they manage.
 *
 * There also exists a database of bank accounts which conaitins all the accounts our managers manage and more.
 * This database also has the information for a account which we do not have.
 * https://raw.githubusercontent.com/Torch-Labs/bank-database/master/bank_info.json
 *
 * Based on the request query for a manager, we need to get the account information from the large database and send
 * a JSON response with a list containing the account information of the accounts the manager manages.
 *
 * All accounts the managers manage also exist in the database.
 */

app.get("/:manager", async (req, res) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
