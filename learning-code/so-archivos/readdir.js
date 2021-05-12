const fs = require("fs");

const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log("error", err);
  }
  console.log(files);
});
