const express = require('express');
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./routes/index.js")(app);
require("./routes/notes.js")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
