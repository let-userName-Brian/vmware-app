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

//Applicant routes
app.get('/applicants', (_, res) => {
    const query = knex('applicants').select('*');
    query.then(data => {
        res.send(data);
    });
});

//add applicant 
app.post('/applicants', (req, res) => {
    const { first_name, last_name, email, phone, experience, skills } = req.body;
    const query = knex('applicants').insert({ first_name, last_name, email, phone, experience, skills});
    query.then(data => {
        res.send(data);
    });
});

//delete applicant based on Id
app.delete(`/applicants/:app_id`, (req, res) => {
    const { app_id } = req.params;
    const query = knex('applicants').where('app_id', app_id).del();
    query.then(data => {
        res.send(data);
    });
});

//get applicants that can_start_now === true
app.get('/applicants/can_start_now', (_, res) => {
    const query = knex('applicants').select('*').where('can_start_now', true);
    query.then(data => {
        res.send(data);
    });
});



//job rouutes 
app.get('/jobs', (_, res) => {
    const query = knex('jobs').select('*');
    query.then(data => {
        res.send(data);
    });
});

//patch jobs
app.patch('/jobs/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, experience, skills } = req.body;
    const query = knex('jobs').where('id', id).update({ title, description, experience, skills });
    query.then(data => {
        res.send(data);
    });
});



