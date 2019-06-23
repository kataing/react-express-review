const express = require('express');
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');


const app = express();
const port = 3000;

// app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router)

// app.get('/name', (req, res) => {
//   res.send('TY');
// })

app.listen(port, () => console.log(`Listening to port ${port}!`));


