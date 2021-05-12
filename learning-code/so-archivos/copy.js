const fs = require("fs");

fs.copyFile("Naranja.txt", "limon.txt", (err) => {
  if (err) {
    console.log("error", err);
  }

  console.log("Naranja copiado como limon")
});
