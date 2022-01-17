exports.seed = function(knex) {
  return knex('jobs').insert([
    {
      job_id: 1,
      title: 'Front End Developer',
      description: 'We are looking for a Front End Developer to join our team!',
      skills: ['JavaScript', ' HTML', ' CSS'],
      experience: '1 year minimum',
    },
    {
      job_id: 2,
      title: 'Backend End Developer',
      description: 'We are looking for a Back End Developer to join our team!',
      skills: ['JavaScript', ' Node', ' Express', ' MongoDB', ' Postgres'],
      experience: '3 year minimum',
    },
    {
      job_id: 3,
      title: 'Front End Developer',
      description: 'We are looking for a Front End Developer to join our team!',
      skills: ['JavaScript', ' HTML', ' CSS'],
      experience: '11 year minimum',
    },
    {
      job_id: 4,
      title: 'Front End Developer',
      description: 'We are looking for a Front End Developer to join our team!',
      skills: ['JavaScript', ' HTML', ' CSS', ' Angular', ' React'],
      experience: '16 year minimum',
    },
    {
      job_id: 5,
      title: 'Full-Stack Developer',
      description: 'We are looking for a Full-Stack Developer to join our team!',
      skills: ['JavaScript', ' HTML', ' CSS', ' TypeScript', ' React', ' Angular-ish', ' Node', ' Express', ' MongoDB', ' Postgres'],
      experience: '5 year minimum',
    },
    {
      job_id: 6,
      title: 'Full-Stack Sole Developer',
      description: 'We are looking for a Hero to join our team!',
      skills: ['JavaScript', ' HTML', ' CSS', ' TypeScript', ' React', ' Angular-ish', ' Node', ' Express', ' MongoDB', ' Postgres', ' Mongoose', ' Sequelize', ' EVERYTHING ELSE'],
      experience: '71 year minimum',
    },
  ]);
};