exports.up = function (knex) {
  return knex.schema.createTable('jobs', table => {
    table.integer('job_id').primary().notNullable();
    table.string('title')
    table.string('description')
    table.specificType('skills', 'text[]')
    table.string('experience')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('jobs');
};
