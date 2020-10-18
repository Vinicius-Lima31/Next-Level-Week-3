const Database = require("sqlite-async"); // importei a dependência do "sqlite-async" que eu havia instalado, é pro Banco de Dados

// esse Database.open abaixo, ele está abrindo o arquivo, ou criando, se ja existir ele abre, se não existir ele cria


function execute(db) { // aqui está a função "execute"
    // vai executar algo, ele espera uma String, irei passar comandos SQL
    console.log("entrei nessa função") // conferindo se entrei na função
    return db.exec(` 
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT  
        );
    `) // depois que eu executar essa código no "node db.js", ele não ira fazer nada, pq ele não sabe onde retornar esse "db.exec", não tem um lugar para ele botar pq não foi definido, então eu terei que botar mais um "then()" para fazer isso, então irei voltar no "Database.open" e adcionar mais um "then()"
}

console.log("qualquer coisa") // em JS, as linhas de códigos são executadas sequencialmente, porém, existem linhas de códigos mais demorados que outras, como é o exemplo do "Database.open" é um processo pouco demorado, então terei que fazer uma operação antes

module.exports = Database.open(__dirname + "/database.sqlite").then(execute) // then() == então, significa que vou abrir o banco de dados, "então" realizei outra coisa em seguida, aqui dentro tem uma função chamada execute, então ela irar executar essa função, ele ira procurar ela no código

// then() significa "então", é uma sequencia de passos, primeiro ele faz uma coisa, "então" faz outra