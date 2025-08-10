import { CatType, type RegularCat } from "../typeDatas";

export const eventCommunities: RegularCat = {
    name: "Events",
    lists: [
        {
            name: "Japan Asian",
            category: ["anime"],
            description: "Evento de Sanlucar y El Puerto",
            url: "",
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