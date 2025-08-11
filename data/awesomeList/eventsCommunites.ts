import { CatType, type RegularCat } from "../typeDatas";

export const eventCommunities: RegularCat = {
    name: "Events",
    lists: [
        {
            name: "Puerto Asian Fest",
            category: ["anime"],
            description: "Evento de El Puerto (Organizado por Red Tanuki Asociacion)",
            url: "https://linktr.ee/redtanukiaso",
            img: ""
        },
        {
            name: "Asian Fest Sanlucar",
            category: ["anime"],
            description: "Evento de Sanlucar (Organizado por Caza Ilusiones)",
            url: "https://www.instagram.com/asianfest_/",
            img: ""
        },
        {
            name: "DoKomi",
            category: ["anime"],
            url: "",
            img: "",
            description: "Evento Aleman de Manga, con cierta fama"
        },
        {
            name: "MCM ComicCon London",
            category: ["anime"],
            url: "",
            img: "",
            description: "Evento Londiense de Manga (Me gusto bastante)"
        },
        {
            name: "Bengala",
            category: ["gamedev", "LGTB+"],
            url: "https://x.com/Madriguera_lgbt",
            img: "",
            description: "Evento dirigido por la Madriguera LGTB+"
        },
        {
            name: "Update Conference",
            category: ["softdev"],
            url: "https://prague.updateconference.net/en",
            img: "",
            description: "Evento Checo de desarrollo .NET (dirigido por mis ex-empleadores)"
        },
        {
            name: "Listado Manga (Salones)",
            category: ["anime"],
            url: "https://www.listadomanga.es/salones.php",
            img: "",
            description: "Listado de Salones Activos en España"
        },
    ],
    type: CatType.Cat
};