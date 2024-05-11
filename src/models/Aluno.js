//importo variável connection do arquivo connection.js -> que está me conectando ao banco
                             //sai da pasta database -> até achar a models  
const { DataTypes } = require('sequelize')
const {connection} = require('../database/connection')
const { password } = require('../config/database.config')

//variavel Aluno = conexão de definição da tabela alunos -> uso variavel para interagir com a tabela alunos de dentro do banco de dados
//conectando alunos ao banco de dados
const Aluno = connection.define('alunos', { //passa nome das colunas que vai interagir
 email: {
  type: DataTypes.STRING,
 },
 password: {
  type: DataTypes.STRING
 },
 nome: {  //manipula coluna nome do tipo string
  type: DataTypes.STRING     //importa variavel DataTypes do sequelize -> traduz p/ BD o tipo de variavel
 },
 data_nascimento: {
  type: DataTypes.DATE   //usa tipos primitivos
 },
 celular:{
  type: DataTypes.STRING
 }
})
//create/delete/id serão preenchidos automaticamente pelo sequelize
module.exports = Aluno //exporto para usar em qualquer lugar do codigo

