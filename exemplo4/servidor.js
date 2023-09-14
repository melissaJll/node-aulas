import http from 'http'; // importando modulo nativo 'http'

//constante que monitora requisissões e recebe dois parâmetros req (requisição) e res (resposta) 

const monitorRequisicao = (req, res) => { //arrow function

    //configurando o cabeçalho da resposta para trabalhar com arquivos html e charset-utf8
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});

    //Avaliando cada requisição (a partir do link) url
    switch(req.url){
        case '/':
            res.end('Servidor Node rodando no navegador!!')
            //exibir index.html
            break;
        case '/sobre':
            //exibir sobre.html
            res.end('Servidor Node rodando Sobre!!')
            break;
        default:
            //exibir 404.html
            break;
    };

};

//Criando o servidor http e indicando a função de requisiçoes
//moduloHttp.create
const servidor = http.createServer(monitorRequisicao);

//iniciando a escuta do serv local na porta8080
//servidor.listen(8080);// Já funciona mas é importante rodar a mensagem para ter certeza zque deu certo

servidor.listen(8080, () => {
    console.log("Servidor node rodando normalmente");
})