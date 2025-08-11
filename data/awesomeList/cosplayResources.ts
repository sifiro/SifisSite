import {CatType, SuperCat, type RegularCat} from "../typeDatas";

const cosplayResources: SuperCat = {
    name: "Cosplay Resources",
    type: CatType.SuperCat,
    lists: [
        {
            name: "Guias",
            type: CatType.Cat,
            lists: [{
                name: "Qyuwi - How To Move Like An ANIME GIRL",
                category: ["performance"],
                url: "https://www.youtube.com/watch?v=wkBEKw6DaYA",
                img: "",
                description: "Tambien es interesante para captura de movimiento"
            }]
        },
        {
            name: "Comisiones",
            type: CatType.Cat,
            lists: [
                {
                    name: "Maxxi",
                    category: ["Wigs"],
                    url: "https://www.instagram.com/maxxicosp/",
                    img: "",
                    description: "Hace trabajillos en la Bahia de Cadiz"
                }
            ]
        }
    ]
}


export { cosplayResources };