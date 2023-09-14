import http from 'http'; //importando o módul onativo http, mesmo sendo um módulo nativo, ainda assim precisamos do package.json

// criando uma função que vai monitorar as requisiçoes e respostas do servidor.
const monitorRequisicao = (req, res) =>{

    //configurando o cabeçalho de resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200, {"Content-type" : "text/html; charset=utf8"});

    //Avaliando requisição do usuario (a partir do link)
    switch (req.url) {
        case "/":
            //o carregamento e leitura do index.html
            break;
        case "/sobre":
            //o carregamento e leitura do sobre.html
            break;
    
        default:
            //o carregamento e leitura do 404.html
            break;
    }

    
}