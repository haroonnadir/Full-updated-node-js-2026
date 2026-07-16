const express = require('express');
const path = require('path');   // add this line

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));