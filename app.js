const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/user/:username', (req, res) => {
//     let user = req.params.username;
//     res.render('index', {username : user});
// });

app.get('/questions', (req, res) => {
    let questions = [
        {title: "What is Node.js", user: "Kadi", votes: "10"},
        {title: "What is Express.js", user: "Mike", votes: "8"},
    ]

    res.render('index', {questions:questions});
})

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000 <--- Open link')
});