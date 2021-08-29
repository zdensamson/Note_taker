const path = require('path');
const router = require('express').Router();

// route to GET & SERVE the index (index.html) of our site
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route to GET & SERVE notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

module.exports = router;