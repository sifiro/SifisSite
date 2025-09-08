import {CatType, type RegularCat, type SuperCat} from "../typeDatas";

const networking: RegularCat = {
    name: "Networking",
    lists: [
        {
            name: "NetHood Links",
            url: "https://nethood.org/links/",
            img: "",
            description: "Recursos para hacerte tu propia intranet",
            category: ["networking"]
        },
        {
            name: "Freedoombox",
            category: ["os"],
            url: "https://freedombox.org/es/",
            img: "",
            description: "Un OS con servicios preajustado en caso de querer alojar algo"
        },
        {
            name: "CopyParty",
            category: ["download","lanparty"],
            url: "https://github.com/9001/copyparty",
            img: "",
            description: "Punto de Reunion de subida y descarga, facil de configurar"
        }
    ],
    type: CatType.Cat
};

const osResources: RegularCat = {
    name: "OS Resources",
    lists: [
        {
            name: "NixOS & Flakes Book - An unofficial book for beginners",
            category: [""],
            url: "https://nixos-and-flakes.thiscute.world/",
            img: "",
            description: ""
        },
        {
            name: "NetBoot XYZ",
            url: "https://github.com/netbootxyz/netboot.xyz",
            img: "",
            description: "Carga Instaladores sin tener que descargar ISOs",
            category: [""]
        },
    ],
    type: CatType.Cat
};

export const techResourcesList: SuperCat = {
    name: "Tech Resources",
    lists: [
        networking,
        osResources,
    ],
    type: CatType.SuperCat
}