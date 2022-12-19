const mongooseClient = require("mongoose");

const { MONGO_DB_USR, MONGO_DB_PWD, MONGO_DB_HOST, MONGO_DB_PORT } =
  process.env;
const credentials = MONGO_DB_USR ? `${MONGO_DB_USR}:${MONGO_DB_PWD}@` : "";
const mongoURI = `mongodb://${credentials}${MONGO_DB_HOST}:${MONGO_DB_PORT}/`;

mongooseClient.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

const NotesSchema = mongooseClient.Schema({
  title: String,
  description: String,
});

const Notes = mongooseClient.model("Notes", NotesSchema);

module.exports = Notes;
