const express = require('express');
const engine = require('ejs-mate');
const path = require('path');



const app = express();
//config
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);