'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecruterSchema extends Schema {
  up () {
    this.create('recruters', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('company_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('recruters')
  }
}

module.exports = RecruterSchema
