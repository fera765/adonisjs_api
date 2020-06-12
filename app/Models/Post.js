'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }

  likes () {
    return this.hasMany('App/Modes/Like')
  }

  files () {
    return this.hasMany('App/Models/File')
  }
}

module.exports = Post
