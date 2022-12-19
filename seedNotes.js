const database = require("./database");
const data = require("./notes.json");

const seedDatabase = async () => {
  database.insertMany(data);
  console.log("Load Seed complete!");
  console.log("Refresh the page please");
};

seedDatabase();
