const { Router, query } = require('express') // importando express -> disponibiliza toda biblioteca necessaria para construir uma aplicação back-end
//importa função Router (do express) -> para definir rotas da aplicação
const Curso = require('../models/Curso') //importando de Aluno.js
const { auth } = require('../middleware/auth') //importando middleware

const cursoRoutes = new Router() //-> uso varivel para inserir as rotas

cursoRoutes.post('/', async (req, res) => {

 try{
  const nome = req.body.nome
  const duracao_horas = req.body.duracao_horas

   if(!nome) {
      return res.status(400).json({ message: 'O nome do curso é obrigatório'})
   }

   if(duracao_horas <= 0) { //(!(duracao_horas >= 40 && duracao_horas <= 800))
      return res.status(400).json({ message: 'A duração em horas é obrigatória'})
   }
  const curso = await Curso.create({
      nome: nome,
      duracao_horas: duracao_horas
  })
  res.status(201).json(curso)
 } catch (error) {
      console.log(error.message)
      res.status(500).json({ error: 'Não foi possível cadastrar o curso'})
 }
})

//Procurando por valores específicos no get -> PROCURO VALOR NO QUERY http://localhost:3000/?nome=TI
cursoRoutes.get('/', async (req, res) => {
  let params = {} //inicializo como um objeto vazio -> será usada para definir parametros de busca para consultar o BD -> recebe objeto nome do JSON

  //SE for passado um parametro QUERY chamado "nome" na requisição, então
    // o parametro "nome" vai ser adicionado dentro da variavel params
  if(req.query.nome) { 
      //o ...params, cria uma cópia do params com as chaves e valores já existentes
      params = {...params, nome: req.query.nome} //se existir, adiciona ao objeto params -> para ser buscado dentro do BD -> os "..." significa que faz uma cópia ou replica o que já existe antes e ADD
  } //ou seja, se estiver pesquisando por "x" e tiver curso com esse nome, esse valor será filtrado e retornará p/ requisição 

  //params = {
  //    nome = req.query.nome -> ou seja, copia e replica 
  //}

  const cursos = await Curso.findAll({
      where: params    //busca todos os cursos do BD que corresponde a params 
  })
  res.status(200).json(cursos)
})
  // const nome = req.query.nome //pego como parametro o nome (do curso)  //utilizo o QUERY
  // const cursos = await Curso.findAll({
  //     where: {
  //         nome:nome //nome seja igual ao nome que estou passando na pesquisa do postman
  //     }
  // })


// cursoRoutes.put('/cursos/:id', async (req, res) => {
//     const cursosId = req.params.id  //pego o valor do id e armazeno em cursosId para capturar o id do curso que quero acessar
//     const data = req.body  //extrai os dados enviados pelo usuario no BODY da requisição e armazena em data -> contém as INFORMAÇÕES que quero ATUALIZAR

//     try{
//         const {updated} = await Curso.update( //deve ser chamada como método -> utilizando um objeto //metodo update para atualizar os dados do curso no BD 
//             data, { //passo os novos dados e especifico qual curso quero atualizar atraves do cursosId
//                 where:{ 
//                     id: cursosId 
//                 } }
//         );
//             if (!updated) {
//                 return res.status(404).json({
//                     error: 'Produto não encontrado.'
//                 });
//             }
//             res.status(200).json({
//                 message: 'Produto atualizado com sucesso.'
//             }); 
//         } catch(error) {
//         console.error('Erro ao atualizar os produtos', error);
//         res.status(500).json({ error: 'Erro ao atualizar o produto.'});
//         }
// });

cursoRoutes.put('/:id', async (req, res) => {
 const {id} = req.params
 const curso = await Curso.findByPk(id)

 if(!curso) {
     return res.status(404).json({
         message: 'Curso não encontrado'
     })
 }
 curso.update(req.body)

 await curso.save()

 res.json(curso)
})


                //id pega valor específico que quero deletar
cursoRoutes.delete('/:id', async (req, res) => {
 const { id } = req.params //pego a partir do parametro da rota + nome da variavel
 
 const curso = await Curso.findByPk(id) //procura CHAVE PRIMÁRIA

 if(!curso) { //se nao existir um curso com essa chave primária
     return res.status(484).json({ error: 'Não encontrado'});
 }
 await curso.destroy();
 res.status(204).json({})    
 // //metodo do sequelize
 // Curso.destroy({
 //    where: {  //onde(where) + condição de deleção
 //     id: id   //vai destruir onde o id é igual o id recebido  //name: "TI"-> exclui os cursos com esse nome
 //    }    
 // })
})

module.exports = cursoRoutes





