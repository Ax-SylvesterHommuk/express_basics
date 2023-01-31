const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/login', (req, res) => {
    console.log('post request done')
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000 <--- Open link')
});