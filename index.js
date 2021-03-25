const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const config = require('./configs/key')

const { User} = require("./models/User");

// // application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// // application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then( () => console.log('MongoDB connected Successfully! '))
  .catch( (err) => console.log(err));


app.get('/', (req, res)=> res.send('HELLO WORLD'));

app.post('/register', (req, res) => {
    console.log('hi!');
    const user = new User(req.body);

    user.save( (err, userInfo) => {
        if (err) return res.json({ success: false, err});
        return res.status(200).json({
            success:true,
            userInfo
        });
    })
});

app.listen(port, () => console.log(`Listening on port ${port} ✅`)) 