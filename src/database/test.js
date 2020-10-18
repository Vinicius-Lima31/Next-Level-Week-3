const Database = require("./db.js")
const saveOrphanage = require("./saveOrphanage")

Database.then(async db => { // troquei para "async", com essa palavra podemos usar um "await", que simplesmente ajuda a gente a não precisa ficar colocando ".then" 
    // inserir dados na tabela
    await saveOrphanage(db, { // cada "id" vai representar um orfanato
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9898978945",
    images: [

        "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

        "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(), // salvando array como String
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0" // 1 de true (verdadeiro)
    })

    // db.run vou executar um código, em vez de a gente ter que ficar colocando um monte de "then()", existe uma coisa chamada "async"


    // consultar dados da tabela
    const selectOrphanages = await db.all("SELECT * FROM orphanages") // seleciona todos os campos da tabela "orphanages"
    console.log(selectOrphanages) // quero ver a tabela, primeiramente ele entrou no "db.run" e adcionou valores a tabela, e depois eu vi aqui no "db.all" para pegar a tabela, e depois imprimi com esse "console"


    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage) // irei mostrar apenas os dados do id 1 da tabela

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='4' "))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='5' "))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='6' "))
 
})

// Lembrando que eu não vou usar esse código, ele só estar aqui pra gente copiar e colar