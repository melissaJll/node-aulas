import express from "express";

//Armazenando em var
const app = express();

//Configurar a view engine com EJS
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('paginas/index');
});

//Iniciar o servidor e escolher a porta
app.listen(8081), () =>{
    console.log('Servidor expressJs rodando normalmente')
}