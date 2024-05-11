// const { DataTypes, ForeignKeyConstraintError } = require('sequelize')
// const { connection } = require('../database/connection')
// const Aluno = require('./Aluno')
// const Curso = require('./Curso')

// const Matricula = connection.define('matriculas', {
//  nome: {
//   type: DataTypes.STRING
//  },
//  aluno_id: {
//   type: DataTypes.INTEGER
//  }
// })

// Matricula.belongsToMany(Aluno)
// Matricula.belongsToMany(Curso)

// //cada aluno possui muitas matriculas
// Aluno.hasMany( Matricula, {
//  foreignKey: 'id'
// })
// Curso.hasMany( Matricula, {
//  foreignKey: 'id'
// })
// module.exports = Matricula
