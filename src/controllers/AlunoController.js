const Aluno = require("../models/Aluno")

class AlunoController {
   // construtor
   // metodos 
   // atributos

 async cadastrar(req, res) {  //function/metodo dentro de uma classe
           //tente //para não quebrar por completo a aplicação -> quando faltar algum preenchimento
 try {  

   const email = req.body.email 
   const password = req.body.senha
   const nome = req.body.nome //pegando nome que esta no body da requisição -> pega o nome atual e atribui a variavel
   const data_nascimento = req.body.data_nascimento
   const celular = req.body.celular
 
    if(!nome) { //se o nome nao estiver preenchido -> validar dados 
      return res.status(400).json({message: 'O nome é obrigatório'}) //precisa do return!!
 }
    if(!data_nascimento) { 
      return res.status(400).json({message: 'A data de nascimento é obrigatória'}) 
 }
                     //verifica se string tem determinado nº de digitos
 // if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)){
 //    return res.status(400).json({message: 'A data de nascimento não está no formato correto'})
 // }

 //objeto aluno criado da classe Aluno   //comunicação demora para ser estabelecida defino async e await 
 const aluno = await Aluno.create({ //CTRL + ESPAÇO -> para importar Aluno  //uso await para esperar que resolva p/ executar proxima linha
   email: email,                        
   password: password,
   nome: nome,  
   data_nascimento: data_nascimento, 
   celular: celular 
 }) 
 res.status(201).json(aluno)

} catch (error){  //mensagem de erro -> erro 500 (erro no servidor)
 // console.log(error.message) //para saber o erro exato da minha aplicação
 res.status(500).json({error: 'Não for possível cadastrar o aluno'})
}
 }

  //findAll
 async listarTodos(req, res) {
  try{
    const alunos = await Aluno.findAll() //busca todos os alunos do BD
    res.status(200).json(alunos) 
  }
  catch(error) {
    res.status(500).json({error: 'Não for possível cadastrar o aluno'})

  }
 }

 async listarUm(req, res) {
  try{ 
    const { id } = req.params
    const aluno = await Aluno.findByPk(id)

    if(!aluno){
        return res.status(404).json({
            message: "Usuário não identificado"
        })
    }

    res.status(200).json(aluno)
}catch (error) {
    console.error(error.message)
    res.status(500).json({
        error: 'Não é possível listar esse aluno',
        error: error
    })
}
 }
}
                //assim não preciso instanciar classe dentro de route
module.exports = new AlunoController() //exportanto classe








