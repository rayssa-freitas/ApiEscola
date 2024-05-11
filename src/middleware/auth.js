// Verificar a autenticiadade do token informado
//será o porteiro da aplicação

const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
 try{
   console.log("Entramos no Middleware")

   //pegando token da requisição -> dentro do headers (no cabeçalho da requisição)
   const { authorization } = req.headers

   //guardo payload na requisição para validá-lo + verifico token
   req['payload'] = verify(authorization, process.env.SECRET_JWT) //crio objeto req -> payload 

   next() //-> para ir ao próximo middleware/ou rota
 } catch (error) {
    return res.status(401).send({ //pode ser send ou json -> send navegador é responsavel por descobrir tipo do objeto - json digo para navegador que é tipo json mesmo
      message: "Autenticação falhou!",
      cause: error.message
})
 }
}
module.exports = { auth }


  










