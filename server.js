const express = require('express');
const app = express();
const port = 4005;
app.use(express.json());
app.use(express.static(__dirname + '/client'));

const route = require('./routes');

route(app);


app.listen(port, () => console.log(`Server is running on ${port}`));