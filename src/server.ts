import express, { response } from "express";
//@types/express
const app = express();

/**
 * GET  => Buscar uma informaçao
 * POST => Inserir uma informção 
 * PUT => Alterar um informação 
 * DELETE => Remover uma informação
 * PATCH => Alterar uma informação especifica
 */

app.get("/test", (request, response) => {
  //request => Entrando
  //response => Saindo
  response.send("Deu bom")
  return
})

app.post("/test-post", (request, response) => {
  let teste = request
  response.send("Deu bom DNV " + teste)
  return

})

//http://localhost:3000
app.listen(3000, () => console.log("Server is Running!"));