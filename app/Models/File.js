'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class File extends Model {
  company () {
    return this.belongsTo('App/Models/Company')
  }

  job () {
    return this.belongsTo('App/Models/Job')
  }

  post () {
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = File
