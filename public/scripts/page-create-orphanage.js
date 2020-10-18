// create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// create and add tileLayer
L.tileLayer
(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map); // Adcionando mapa gratuito

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", // localização
    iconSize: [58, 68], // Tamanho 
    iconAnchor: [29, 68], // onde ele vai estar ancorado
})


let marker;

// create and add marker
map.on('click', (event) => { // vai receber 2 argumentos, quando eu clicar no mapa, e uma função, cada vez que eu clicar no mapa, ele estara entrando nesse pedaço de código 
    console.log(event) // cada vez que eu clicar no mapa, eu quero que imprima o event(evento) no console

    const lat = event.latlng.lat; // peguei a latitude  através do click
    const lng = event.latlng.lng; // peguei longitude

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) // caso o marker exista ele ira remover através dessa função


    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map) // adcionar ao mapa
})

// adcionar o campo de fotos
function addPhotoField() {
    console.log("esta funcionando")

    // pegar container de fotos #images
    const container = document.querySelector("#images")

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")

    // realizar o clone da última imagem adcionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // "length" mostra o tamanho, ou seja, o tamanho se refere a ultima posição, "cloneNode() para copiar ou não o que esta dentro"

    // verificar se o campo está vazio, se sim, não adcionar ao container de imagens. Verifica se o campo está vazio, se estiver ele não consegue colocar fotos.
    const input = newFieldContainer.children[0]

    console.log( input.value == "") // esta verificando se o input é igual a vazio

    if(input.value == "") { // se for true, ele vai entrar aqui, e vai finalizar a função, por que ele encontra o return
        return
    }

    // limpar o campo antes de adcionar ao container de imagens
    console.log(newFieldContainer.children) // mostrando filhos de "newFieldContainer"
    input.value = "" // filho recebe vazio, o filho é o <input> que é o indice 0, o <span> é o indice 1



    // adcionar o clone ao container de #images
    container.appendChild(newFieldContainer) // append == acrescentar, colocar, Child == filho... acrescentar filho
}

function deleteField(event) { // lembrando que essa função estar no onclick do <span> responsavel por remover fotos
    console.log(event) // vai mostrar o evento do click
    console.log(event.currentTarget) // esta vendo quem está disparando o evento

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    console.log(fieldsContainer.length) // para ver quantos eu tenho ali dentro, por que preciso fazer uma condição, caso não tenha nenhuma foto, não terá nada pra eu remover, se não tiver nada ele vai estar com valor de 1

    if(fieldsContainer.length <= 1 ) { // 1 é vazio, como foi mostrado o console, através de testes
        // limpar o valor do campo, quando apertar o botão, e só tiver 1 dado, ele ira apagar oq foi escrito
        span.parentNode.children[0].value = "" // apaguei oq estava escrito, caso só tenha um dado, peguei o <input> aqui, ele foi atrás do pai do <span> que é o "new-upload" e depois foi atrás do primeiro filho do "new-upload" que é o <input>
        return
    }

    console.log("cheguei aqui")

    // deletar o campo
    console.log(span.parentNode) // é o pai, vai mostrar o pai do "span" que é o "new-upload"

    span.parentNode.remove() // deleto o campo
}

// selecionar sim ou não
function toggleSelect(event) {
    console.log("Cheguei aqui?") // conferindo no console se após o click no "Sim" e "Não" ele mostrara no Console do Browser


    // retirar a class .active (dos botões)
    const buttons = document.querySelectorAll(".button-select button") // peguei todos botões la dentro
    console.log(buttons) // Estou verificando quantos botões tem

    buttons.forEach(function(button) { // para cada botão ele vai fazer essa funcionalidade aqui, é um nodeList, preciso percorrer ela
        button.classList.remove("active") // removendo class="active" do <button>
    })

                                                                        /* Usando Arrow Function no forEach de cima
                                                                                buttons.forEach((button) => button.classList.remove("active"));
                                                                        */


    // colocar a class. active no botão clicado
    const button = event.currentTarget // Botão que esta clicado
    button.classList.add("active") // agora adciono a class "active"


    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    console.log(input) // imprimindo o "input"
    
    input.value = button.dataset.value // no HTML dos <button> cada <button> tem um "data-value", que eu consigo acessar ele através do "dataset.value" e ver o valor, no caso se o botão "sim" for selecionado o "data-value" que eu irei receber é 1, se o botão "não" for selecionado o "data-value" que eu irei receber é 0

    
}


function validate(event) {

    // validar se lat e lng estão preenchidos
    const valid = document.querySelector(".map-container input").value
    if(valid == "") {
        event.preventDefault() // com isso aqui, a pagina fica no mesmo lugar, ela não muda de página nem nada.
        alert("Selecione um ponto do mapa")
    }
 
}