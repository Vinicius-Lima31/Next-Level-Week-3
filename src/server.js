// console.log("Teste 1, testando o Terminal") // Irei executar essa linha de código no terminal com: "node server.js", e ele irar executar esse console.log acima, exibindo a mensagem


// importar dependencia
const express = require("express") // criei uma constante e chamei a dependencia para ela
const path = require("path") // é uma dependencia do Node, não preciso instalar nem nada, feito para consertar o barra invertido, pra evitar erros, posso fazer junção sem problemas
const pages = require("./pages.js")

// iniciando o express
const server = express()
server
    // utilizar o body do req
    .use(express.urlencoded({ extended: true }))

    // ultilizando arquivos estaticos
    .use(express.static('public')) // existem arquivos estaticos e dinamicos, os estaticos são que os que não são alterados, permanecem da mesma forma, já os dinamicos são coisas que mudam, ficam sendo alterados com a aplicação ativa, por exemplo um banco de dados, ja o estaticos temos imagens e css, que não são alterados, eles permanecem do mesmo jeito

    // após eu colocar essa rota para acessar todos "public", eu terei que ir no meu "index.html" e remover todos os "public" dele, já que ele estaria acessando em public/public e isso não existe, exemplo: <link rel="stylesheet" href="/css/main.css">, eles tem que ficar assim agora, sem o "public" que ficava antes do "/css"


    // configurar template engine
    .set("views", path.join(__dirname, "views")) // quero que ele busque meus arquivos da views, no caso eu não preciso mais do "sendFile", nessa linha eu usei apenas a rota, agora que tenho que usar a dependencia hbs
    .set("view engine", "hbs") // usando dependencia hbs, usando dessa forma não preciso mais do "sendFile", eu vou la e coloco: "return response.render('index')"
    // MUITO IMPORTANTE!! TODO ARQUIVO QUE ESTAVA TERMINANDO COM .HTML, AGORA TEM QUE TERMINAR COM .HBS

    // criar rotas
    //.get('/', (req, res) => { // o que esta dentro das aspas é uma rota. Na função eu coloco 2 argumentos, que são a requisição e a resposta 

    // console.log(req.query) // ele vai pegar todos os dados que estão após o "?" da URL, "query" é uma forma de pegar dados, também temos uma chamado "Body" mas essa é pelo formulario

    // return response.send("Oi direto do back-end") // "send" é uma funcionalidade, no caso essa mensagem ira aparecer quando eu entrar na porta 5500

    // console.log(path.join(__dirname, "views", "index.html"))  Aqui ele vai tar pergutando onde esta meu arquivo "sendFile"

    // return response.sendFile(path.join(__dirname, "views", "index.html")) // Porem na porta esta o "index.html", porém todo bagunçado, sem imagem, sem CSS, sem script

    // no caso no lugar do "/", eu teria que criar uma rota para cada CSS, imagem, script, teria que criar um "server.get" para cada coisa, porém isso é meio impossivel, temos outro metódo, irei usar uma funcionalidade chamada "use" que eu irei acrescentar bem acima


    // return res.render('index') // a gente faz assim agora, usando hbs, sem o "sendFile" MUITO IMPORTANTE!! TODO ARQUIVO QUE ESTAVA TERMINANDO COM .HTML, AGORA TEM QUE TERMINAR COM .HBS
    /*
        const name = "Mayk"
        return response.render('index', { name : name})

        se eu fizesse isso, e eu fosse no index.hbs, e no <strong> eu colocasse o {{name}} (dessa forma), no <strong> da página estaria escrito "Mayk"

        outro exemplo

        const city = req.query.city
        return res.render("index", {city})

        se eu fizesse isso, eu estaria modificando uma parte do HTML, através da URL, lembrando que o "query" pega o que vem depois do "?" da URL
    */

    //}) // Porém a gente não ira fazer com esse "sendFile" será de outra forma

    // rotas da aplicação
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)

// Ligar o servidor
server.listen(5500) // liguei e passei uma porta para ele rodar a aplicação, desistalamos o puglin "Live server", em seguida executamos esse "sever.js" indo no terminal, e colocando "node src/server.js". após eu executar e colocar a porta no browser, ele vai ficar executando para sempre, por que a gente não colocou um return no "server.get"

// irei criar outro arquivo chamado "pages.js" ele será responsavel pelas rotas