

let url = "https://jsonplaceholder.typicode.com/posts/10";


//conteudo pego no site https://jsonplaceholder.typicode.com/
// 1) conectando com o endpoint da api(url)
fetch(url)

// 2) retornando a resposta como JSON
.then(resposta => resposta.json())

// 3) exibindo no console os dados obtidos na API
.then(dados => console.log(dados.title));