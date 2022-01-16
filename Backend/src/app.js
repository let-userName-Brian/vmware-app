const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);
const Port = 3001;

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

//routes
app.get('/applicants', (req, res) => {
    const query = knex('applicants').select('*');
    query.then(data => {
        res.send(data);
    });
});


