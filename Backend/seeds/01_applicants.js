exports.seed = function(knex) {
  return knex('applicants').insert([
    {
      app_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@gmail.com',
      phone: '123-456-7890',
      skills: ['JavaScript', ' HTML', ' CSS'],
      experience: '1 year',
      jobs_applied: [2, 3],
      can_start_now: true
    },
    {
      app_id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane.doe@gmail.com',
      phone: '123-456-7890',
      skills: ['JavaScript', ' HTML', ' CSS'],
      experience: '1 year',
      jobs_applied: [1, 2, 4],
      can_start_now: true
    },
    {
      app_id: 3,
      first_name: 'Bill',
      last_name: 'Doe',
      email: 'Bill.doe@gmail.com',
      phone: '123-456-7890',
      skills: ['TypeScript', ' HTML', 'CSS'],
      experience: '1 year',
      jobs_applied: [1,2,3],
      can_start_now: false
    },
    {
      app_id: 4,
      first_name: 'Brian',
      last_name: 'Hardy',
      email: 'brian.hardy@gmail.com',
      phone: '123-456-7890',
      skills: ['JavaScript', ' HTML', ' CSS', ' TypeScript', ' React', ' Angular-ish', ' Node', ' Express', ' MongoDB', ' Postgres'],
      experience: '4 year',
      jobs_applied: [3,6],
      can_start_now: true
    },
    {
      app_id: 5,
      first_name: 'One Eyed',
      last_name: 'Willy',
      email: 'Willy@gmail.com',
      phone: '123-456-7890',
      skills: ['JavaScript', ' HTML', ' CSS', ' Angular', ' TypeScript'],
      experience: '1 year',
      jobs_applied: [1,2,3,4,5],
      can_start_now: false
    },
    {
      app_id: 6,
      first_name: 'Grey',
      last_name: 'Door',
      email: 'Grey@gmail.com',
      phone: '123-456-7890',
      skills: ['JavaScript', ' HTML', ' CSS', ' Angular', ' TypeScript'],
      experience: '1 year',
      jobs_applied: [1,3],
      can_start_now: false
    }
  ])
};