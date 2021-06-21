import express from 'express';

const app = express();

app.get("/teste", (request,response)=>{
    return response.send("Primeira requisição")
});


app.post("/teste-post", (request, response)=>{
    return response.send("Primeiro Post");
})

app.listen(3000,()=> console.log("Hello People!"));