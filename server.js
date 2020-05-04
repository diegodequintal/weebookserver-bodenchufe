const app = require("./app");

const server = app.listen(4000, () => {
  console.log(`App running on port 4000...`);
});
