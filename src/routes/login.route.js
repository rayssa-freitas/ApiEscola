const { Router, query } = require('express') 

const Aluno = require('../models/Aluno') 
const { sign } = require('jsonwebtoken') 

const loginRoutes = new Router() 
//quando quero usar classe pronta preciso estanciar, criando uma variavel e através de -> new Router

// GET - Lista alguma coisa
// POST - Criar/adicionar algo
// PUT - Atualizar algo
// DELETE - Deleta algo
// PATCH - Campos específicos
    
// criar uma rota 
 // tipo -> get, post...
 // path -> com qual nome acesso essa rota -> /bem_vindo
 // implementacao -> o que rota vai fazer quando chamarem ela

 
//deletar curso no BD
//BODY PARAMS - POST/PUT -> criar algo no BD
//ROUTE PARAMS /1 - PUT/DELETE -> procura elemento específico
//QUERY PARAMS ?id=1 - GET -> para filtros, como pesquisas


 //tipo de rota que quero na aplicação
loginRoutes.get('/bem_vindo', (req, res) => {
    res.status(200).json({name: 'Bem vindo'}) //retornando um objeto através do formato -> .json
})
//se fazer requisição tipo get, recebo bem-vindo como resposta


// rota de login
loginRoutes.post('/', async (req, res) => {
    try{
         const email = req.body.email
         const password = req.body.password
   
         if(!email) { //se o nome nao estiver preenchido -> validar dados 
            return res.status(400).json({message: 'O e-mail é obrigatório'}) //precisa do return!!
        }
        if(!password) {
            return res.status(400).json({message: 'A senha é obrigatória'}) 
        }
   
        const aluno = await Aluno.findOne({  //se achar aluno com email e senha igual a fornecida -> login
            where: {
                email:email,
                password:password
            }
        })
        if(!aluno) {
            return res.status(404).json({ message: 'Nenhum aluno corresponde ao e-mail fornecido'})
        }
   
        const payload = {sub: aluno.id, email: aluno.email, nome: aluno.nome}     //sub = id do usuario 
        //informaçoes que estarão dentro do meu token
      
        console.log(process.env.SECRET_JWT)
   
        //criando token
        const token = sign(payload, process.env.SECRET_JWT)
         //sing = assina o token   //process para acessar a variavel de ambiente do .env
       //   expiresIn: '24h' //tempo de expiração do token
   
        res.status(200).json({Token: token}) //insere token
   
    } catch (error) {
        res.status(500).json({error: error, message: 'Algo deu errado'}) 
    }
   })

   
module.exports = loginRoutes //exporto variável -> por isso vai ser {} -> se fosse comando/função precisaria das {}



