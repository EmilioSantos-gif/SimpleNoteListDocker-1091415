const Notes = require("./database");
const data = require("./notes.json");

for (const note of data) {
  const newNote = new Notes({});
  newNote.title = note.title;
  newNote.description = note.description;

  newNote.save((err, n) => {
    if (err) {
      console.log(err);
    }

    console.log(`Saved: ${n.title}`);
  });
}

console.log("finished")