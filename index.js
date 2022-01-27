const express = require('express');
const port = process.env.port || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Deez nutsss');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;