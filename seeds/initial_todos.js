
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { name: 'Cook', user_id: '1' },
        { name: 'Clean', user_id: '2' },
      ]);
    });
};

// table.increments('id').notNullable().primary();
// table.string('name').notNullable();
// table.boolean('done').notNullable().defaultTo('false');
// table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');