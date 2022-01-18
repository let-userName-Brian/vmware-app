exports.up = function (knex) {
  return knex.schema.createTable('applicants', table => {
    table.increments('app_id');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone');
    table.string('skills');
    table.string('experience');
    table.specificType('jobs_applied', 'int[]').defaultTo(null);
    table.boolean('can_start_now').defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('applicants');
};
