const express = require('express');
const app = express();
const time = new Date();

app.use(express.static('public'));
app.disable('x-powered-by');

app.get('/', (req, res) => res.sendFile('public/index.html'));
app.listen(8080, () => console.log(`Express server started @ ${time}`));

