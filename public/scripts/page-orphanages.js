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
    popupAnchor: [170, 2] // Posição
})


function addMarker({id, name, lat, lng}) {
    // create popup overlay
    const popup = L.popup({
    closeButtton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

    // create and add marker
    L
    .marker([lat, lng], { icon }) // "icon" ou "icon: icon", eu posso usar apenas o icon, que o compilador entende 
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll(".orphanages span")
console.log(orphanagesSpan) // uma "nodeList" com 2 <span>

orphanagesSpan.forEach( span => {
    const orphanage = {
        // dataset é o 'data-(algumacoisa)' que eu coloquei no HTML
        id: span.dataset.id, 
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})