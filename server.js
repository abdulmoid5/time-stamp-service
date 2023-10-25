const express = require("express");
const moment = require("moment");
const app = express();

require("dotenv").config();

app.use(express.static("public"));

app.get("/:timestamp", (req, res) => {
  const { timestamp } = req.params;
  let date;

  if (!isNaN(timestamp)) {
    date = moment.unix(timestamp);
  } else {
    date = moment(timestamp, "MMMM D, YYYY");
  }

  if (date.isValid()) {
    res.json({
      unix: date.unix(),
      utc: date.toUTCString(),
    });
  } else {
    res.json({
      error: "Invalid Date",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
