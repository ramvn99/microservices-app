const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node.js Application!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js app running on port ${PORT}`);
});
