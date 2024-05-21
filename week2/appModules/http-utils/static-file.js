const fs = require("fs");
const path = require("path");
const mimeTypes = require("./mime-types");

function staticFile(res, filePath) {
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.setHeader("Content-Type", contentType);

  fs.readFile("./public" + filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      res.end(data);
    }
  });
}

module.exports = staticFile;
