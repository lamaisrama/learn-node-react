const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/boiler-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then( () => console.log('MongoDB connected Successfully! '))
  .catch( (err) => console.log(err));

app.get('/', (req, res)=> res.send('HELLO WORLD'));

app.listen(port, () => console.log(`Listening on port ${port} ✅`)) 