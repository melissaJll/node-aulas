import http from 'http'; // importando modulo nativo 'http'
import fs from 'fs/promises';// file system: permite ao servidor acesso ao sistema de arquivos(modulo nstivo)


//constante que monitora requisissões e recebe dois parâmetros req (requisição) e res (resposta) 
const monitorRequisicao = (req, res) => { //arrow function

    //configurando o cabeçalho da resposta para trabalhar com arquivos html e charset-utf8
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});

    //Avaliando cada requisição (a partir do link) url
    switch(req.url){
        case '/':
            //fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')
            //depois de pronto, envia o conteudo como resposta
            .then(conteudo => res.end(conteudo));
            
            break;
        case '/sobre':
            fs.readFile('paginas/sobre.html').then(conteudo => res.end(conteudo));
            break;
            
        default:
            res.writeHead(404); //exibe mensg
            fs.readFile('paginas/404.html').then
                (conteud => res.end(conteud))
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