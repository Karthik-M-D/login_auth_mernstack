const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;


mongoose.connect("mongodb+srv://abc:123@cluster0.jey7qnv.mongodb.net/", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed')
    })


// schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model("User", userSchema);

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).exec();
    if (user) {
        res.status(500);
        res.json({
            message: "user already exists"
        });
        return;
    }

    await User.create({ username, password });

    res.json({
        message: "success"
    });
})

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})