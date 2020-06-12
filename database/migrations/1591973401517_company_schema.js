'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.string('name', 100).notNullable()
      table.string('title', 300).notNullable()
      table.string('email').nullable()
      table.text('content').nullable()
      table.string('thumb_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
