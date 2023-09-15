import express from "express";

//Armazenando em  uma variavel. Ao inves d chamar express().get, usamos app.get
const app = express();

//Configurar a view engine com EJS
app.set('view engine', 'ejs');

//Configurar as rotas de acesso

    //Raiz do site
app.get('/', (req, res)=> {
    //res.send('Bem-vindo ao servidor expressjs h')
    const bandas =['Justin Bieber', 'Ozzy', 'Calypso'];
    res.render('paginas/index', {bandas}); //ejs sem .ejs
});
    //Sobre
app.get('/sobre',(req, res)=>{
    res.render('paginas/sobre')
});

app.get('/contato',(req, res)=>{
    res.render('paginas/sobre')
});

//Iniciar o servidor e escolher a porta
app.listen(3000), () =>{
    console.log('Servidor expressJs rodando normalmente')
}