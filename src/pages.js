const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");


module.exports = { // essa linha é responsavel por esse objeto, eu posso importar esse module aqui, em outro arquivo, e irei fazer
    index(req, res) {
        return res.render("index")
    },

    async orphanage(req, res) {
        const id = req.query.id // aqui eu estou pegando o que vem depois da "?" na URL

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",") // vai procurar uma virgula nessa string, e vai transformar em array, cada posição após virgula que ele achar
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0") {
                orphanage.open_on_weekends = false
            } else {
                orphanage.open_on_weekends = true
            }

            console.log(orphanage[0]) // olhando orfanato na posição 0

            

            return res.render("orphanage", {orphanage})
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }
    },

    async orphanages(req, res) {
        // colocar o orphanage pelo banco
        try { // tratamento de erros
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render("orphanages", { orphanages })
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }

    },

    createOrphanage(req, res) {
        return res.render("create-orphanage")
    },

    async saveOrphanage(req, res) {
        console.log(req.body) // tenho os dados do formulario aqui, ele sempre vem vazio, porem eu tenho que fazer uma alteração no "server.js", ".use(express.urlencoded({extended: true }))"

        const fields = req.body  // pegando dados do formulario

        // validar se todos os campos estao preenchidos
        console.log(Object.values(fields).includes("")) // colocou apenas os valores do objeto, no caso dos valores do formulario, o "inlcudes" eu estarei verificando se ele inclui alguma coisa vazia
        if(Object.values(fields).includes("")) {
            return res.send("Todos os campos devem ser preenchidos!")
        } // aqui ele vai ficar rodando sem parar, e não vai saber mais oq fazer, então eu tenho que dar continuação, ou seja, salvar o orfanato


        try {
            // salvar um orfanato
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
        })
        
        // redirecionamento
        return res.redirect("/orphanages") // quero redirecionar para página "orphanages"
        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }

        
    }
}

// Temos que apagar todos os ./public, igual fizemos antes, porem, é só eu ir na barra de pesquisa, pesquisar por "./public", que ele ira procurar todos arquivos com isso, e la mesmo eu dou um "replace" que deixo tudo vazio
// Temos que apagar também os ".html", fazemos o mesmo procedimento clicamos na lupa ou usamos comando CTRL + SHIFT + F, de damos um replace com vazio em tudo

// Pronto aclopamos o Back-end ao front-end

// como eu criei um arquivo chamado "fakedata.js" para um banco de dados, agora eu tenho que importar ele aqui, para poder mostrar os dados do mapa

