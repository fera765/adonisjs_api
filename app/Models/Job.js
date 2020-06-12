'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {
  company () {
    return this.belongsTo('App/Models/Company')
  }

  files () {
    return this.hasMany('App/Models/File')
  }
}

module.exports = Job
