const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// pangil routes
const router = require('./router');
router(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});