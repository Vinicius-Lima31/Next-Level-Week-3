module.exports = [ // banco de dados fake, feito de um Array
    { // cada "id" vai representar um orfanato
        id: 1,
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [

            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

            "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1" // 1 de true (verdadeiro)
    },


    { // cada "id" vai representar um orfanato
    id: 2,
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [

        "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

        "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ],
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0" // 1 de true (verdadeiro)
},
]
// pronto, agora temos que mostrar essas dados em no "orphanages"