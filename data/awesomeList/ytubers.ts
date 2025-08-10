import { CatType, RegularCat, type SuperCat } from "../typeDatas";

const vtubers: RegularCat = {
    name: "Vtubers",
    type: CatType.Cat,
    lists: [
        {
            name: "Eine Lotta",
            category: ["german"],
            url: "https://www.youtube.com/@EineLotta",
            img: "",
            description: ""
        }
    ]
};

const youtubers: RegularCat = {
    name: "Youtubers",
    type: CatType.Cat,
    lists: [
        {
            name: "allen_issy",
            category: ["rock", "fashion", "retro"],
            url: "https://www.youtube.com/@allen_issy",
            img: "",
            description: ""
        },
        {
            name: "AddyHarajuku",
            category: ["jfashion", "anime"],
            url: "https://www.youtube.com/@AddyHarajuku",
            img: "",
            description: ""
        }
    ]
};

const videos: RegularCat = {
    name: "Videos",
    type: CatType.Cat,
    lists: [{
        name: "Study Equal Magic - Version desastre",
        category: ["dance", "fails"],
        url: "https://www.youtube.com/watch?v=Uvz_hIloJUs",
        img: "",
        description: ""
    },
    {
        name: "hamu_cotton BIBBIDIBA Cosplay Dance Cover",
        category: ["dance"],
        url: "https://www.youtube.com/watch?v=yanqk3Iycdw",
        img: "",
        description: "Me gusta esta version porque tiene la performer tiene un estilo mas \"chulera\" que le pega comparado con otros covers"
    }
    ]
};

export const youtuber: SuperCat = {
    name: "Youtube(ers)",
    lists: [
        vtubers,
        youtubers,
        videos
    ],
    type: CatType.SuperCat
}