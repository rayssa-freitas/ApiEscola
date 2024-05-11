const { Router, query } = require('express') // importando express -> disponibiliza toda biblioteca necessaria para construir uma aplicação back-end
//importa função Router (do express) -> para definir rotas da aplicação
const { auth } = require('../middleware/auth') //importando middleware
const AlunoController = require('../controllers/AlunoController') //importando controller

const alunoRoutes = new Router() //-> uso varivel para inserir as rotas

//cadastrar aluno no BD 
alunoRoutes.post('/', AlunoController.cadastrar) 
                  //classe já instanciada 

//listar alunos no BD
alunoRoutes.get('/', auth, AlunoController.listarTodos)

//listar aluno específico
alunoRoutes.get('/:id', auth, AlunoController.listarUm)

// //exemplo de alteração de senha usando payload
// alunoRoutes.get('/alterar_senha', auth, async (req, res) => { 
//    id = req.payload.sub
// })



// Aluno.create({   //criando tabela aluno  //a partir da exportação em models
//     nome: 'Rayssa Freitas',   //passo em formato json informaçoes que quero cadastrar
//     data_nascimento: '2001-01-24',  //o BD reconhece como data mesmo colocando como string
//     celular: '48 988031187'
//   }) 

module.exports = alunoRoutes 