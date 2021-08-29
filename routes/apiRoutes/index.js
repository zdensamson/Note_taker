const fs = require('fs');
const path = require('path');
// intialize router
const router = require('express').Router();
// import db.json
const notes = require('../../db/db.json');
// import random (UNIQUE) id
const uuid = require('uuid');


// GETs all notes in db.json and responds with all notes
// uses "const getAndRenderNotes = () => getNotes().then(renderNoteList);" to generate all note TITLE's on LEFT of SCREEN
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POSTs new JSON note objects
router.post('/notes', (req, res) => {
    const newNote = {
        //generate a random id
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    };
    
    if(!newNote.title || !newNote.text) {
        return res.status(400).json({ msg: 'Please include required fields' })
    }
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    res.json(notes);
});

module.exports = router;