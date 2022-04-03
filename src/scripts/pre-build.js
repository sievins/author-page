// Store the dimensions for each cover so material-ui-image can create a placeholder with the right size

const probe = require("probe-image-size");
const fs = require("fs");
const path = require("path");
const del = require("del");

const coversDirectory = path.resolve(__dirname, "../assets/images/covers");
const metaFileName = "meta.json";

const coverNames = fs
  .readdirSync(coversDirectory)
  .filter((name) => name !== metaFileName);

const dimensions = coverNames.map((coverName) => {
  const { width, height } = probe.sync(
    fs.readFileSync(path.resolve(coversDirectory, coverName))
  );

  return {
    coverName,
    naturalWidth: width,
    naturalHeight: height,
  };
});

fs.writeFileSync(
  path.resolve(coversDirectory, metaFileName),
  JSON.stringify(dimensions)
);

del.sync(["build/**"]);
