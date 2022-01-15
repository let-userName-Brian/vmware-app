exports.up = function (knex) {
  return knex.schema.createTable('applicants', table => {
    table.integer('app_id').primary().notNullable();
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('phone')
    table.specificType('skills', 'text[]')
    table.string('experience')
    table.specificType('jobs_applied', 'int[]')
    table.boolean('can_start_now')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('applicants');
};
