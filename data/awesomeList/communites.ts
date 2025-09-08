import {CatType, type RegularCat} from "../typeDatas";

export const communities: RegularCat = {
    name: "IRL Communities",
    lists: [
        {
            name: "CadizGameDev",
            category: ["gamedev"],
            url: "https://linktr.ee/cadizgamedev",
            img: "",
            description: "Agrupacion de desarrolladores de videojuegos gaditanos (trimestral)"
        },
        {
            name: "DevContact",
            category: ["gamedev"],
            url: "https://linktr.ee/devcontact_es",
            img: "",
            description: "Agrupacion de desarrolladores de videojuegos sevillanos (mensual)"
        },
        {
            name: "POVERTY FIGHTERS CÁDIZ",
            category: ["gaming"],
            url: "http://linktr.ee/povertyfgcadiz",
            img: "",
            description: "Agrupacion de gamers de lucha en Cadiz"
        },
        {
            name: "Asociación Yokai",
            category: ["cosplay"],
            url: "https://www.instagram.com/asociacion_yokai/",
            img: "",
            description: "Agrupacion Cosplayer en Cadiz"
        },
        {
            name: "Cosplay Dayout",
            category: ["cosplay"],
            url: "https://linktr.ee/cosplaydayoutsevilla",
            img: "",
            description: "Agrupacion Cosplayer en Sevilla"
        },
        {
            name: "Anime Clubs of the United Kingdom and Ireland",
            category: ["anime"],
            url: "https://forums.animeuknews.net/threads/anime-clubs-of-the-united-kingdom-and-ireland.3640/",
            img: "",
            description: "(last update: 2011 con posts 2020) Esta lista es la que use para encontrar la de BasingStoke"
        }
    ],
    type: CatType.Cat
};