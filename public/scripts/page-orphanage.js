const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat
const lng = document.querySelector("span[data-lng]").dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

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
    popupAnchor: [170, 2] // Posição
})


// create and add marker
L
.marker([lat, lng], { icon }) // icon ou icon: icon, eu posso usar apenas o icon, que o compilador entende 
.addTo(map)

// image gallery 

function selectImage(event) {
    console.log("Cliquei no Botão")
    // current = atual          Target = alvo
    // alvo atual

    const button = event.currentTarget // pegando atual alvo, no caso é o HTML do <button> 

    // remover todas classes .active
    const buttons = document.querySelectorAll(".images button") // pesquisando todos seletores
    console.log(buttons) // mostrando todos botões no console do Browser 

    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active") // estou indo remover a class="active" do <button>
    }

    // selecionar a imagem clicada
    const image = button.children[0] // Aqui eu busco o filho, cada botão só possui um filho, então ele sempre ira na imagem, pedindo posição 0, ele é uma imagem

    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container de imagem
    imageContainer.src = image.src // peguei src, da imagem clicada,

    // adcionar a classe .active para este botão (botão que foi clicado)
    button.classList.add("active") // botãao clicado

}