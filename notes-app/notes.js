const fs = require('fs');



function loadNotes() {
  try {
    return (JSON.parse(fs.readFileSync('notes.json')));
  } catch (error) {
    return [];
  }
}

const notes = loadNotes();


const getNotes = () =>  notes.map(n => n.title);

const addNote = (title, body) => {
  if (notes.find(n => n.title === title)) return false;
  const newNote = {
    title: title,
    body: body,
  };
  notes.push(newNote);
  try {
    saveNotes();
    return (true);
  } catch (error) {
    return false;
  }
}

const removeNote = (title) => {
  const noteToRemove = notes.find(n => n.title === title);
  if (noteToRemove === undefined) return false;
  notes.pop(noteToRemove);
  try {
    saveNotes();
    return true;
  } catch (error) {
    return false;
  }
}

const readNote = (title) => {
  const noteToRead = notes.find(n => n.title === title);
  if (noteToRead === undefined) return "Note Not Found";
  return noteToRead.body;
}

function saveNotes() {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};