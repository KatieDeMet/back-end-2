const express = require('express');
const cors = require('cors');
const cntl = require('./controller.js');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/houses', cntl.getHouses);
app.post('/api/houses', cntl.createHouse);
app.put('/api/houses/:id', cntl.updateHouse);
app.delete('/api/houses/:id', cntl.deleteHouse);

app.listen(4004, () => console.log("Listening on port 4004"));