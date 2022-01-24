module.exports = {

  development: {
    client: 'pg',
    client: 'postgres',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'vmware'
    },
  },

  staging: {
    client: 'postgres',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'vmware'
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'vmware'
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'

    }
  },
};
