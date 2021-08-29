const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3333;
const app = express();

//MIDDLEWARE-----------------------

//sets a static folder
app.use(express.static('public'));
// allows app to hanlde raw JSON
app.use(express.json());
// handles form submissions/url encoded data
app.use(express.urlencoded({ extended: true }));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})