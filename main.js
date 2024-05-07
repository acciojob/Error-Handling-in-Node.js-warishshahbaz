const fs = require("fs");

const filePath = "./invalid.json";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Check if jsonData is an array or object
    if (!Array.isArray(jsonData) && typeof jsonData !== "object") {
      throw new Error(
        "Invalid JSON file format. JSON data must be an array or object."
      );
    }

    // Check if required data is missing
    if (!jsonData.hasOwnProperty("age")) {
      throw new Error('Missing required data: "users" array/object not found.');
    }

    console.log("JSON file read successfully:", jsonData);
    // TODO: Perform error handling for invalid file format and missing data
  } catch (err) {
    console.error(
      "Invalid JSON file format. Please provide a valid JSON file.",
      err.message
    );
  }
});
