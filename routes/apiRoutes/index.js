// API routes for the notes (db.json)
const router = require('express').Router();
const notes = require('../../db/db.json');

// GETs all notes in db.json and responds with all notes
// allows the 
router.get('/notes', (req, res) => {
    res.json(notes);
});

module.exports = router;