const express = require("express");
const port = 5050;
const app = express();

app.use((req, res) => {
  res.statusCode = 200;
  res.json({
    name: "test",
  });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
