const { Router } = require("express");
const alunoRoutes = require('./alunos.route')
const cursoRoutes = require('./cursos.route')
const loginRoutes = require('./login.route')
const routes = Router()

//usando rota já registrada
routes.use('/alunos', alunoRoutes) //toda vez que estiver em alunoRoutes vai adicionar automaticamente o /alunos
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)


//exporto modulo
module.exports = routes





