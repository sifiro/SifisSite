import {CatType, RegularCat, type SuperCat} from "../typeDatas";

const vtubers: RegularCat = {
    name: "Independient Vtubers",
    type: CatType.Cat,
    lists: [
        {
            name: "Eine Lotta",
            category: ["german"],
            url: "https://www.youtube.com/@EineLotta",
            img: "",
            description: ""
        },
        {
            name: "Deme",
            category: [""],
            url: "https://www.youtube.com/@demevt",
            img: "",
            description: ""
        },
        {
            name: "RoseDoodle",
            category: [""],
            url: "https://www.youtube.com/@rosedoodle",
            img: "",
            description: ""
        },
        {
            name: "sasasakikiki333",
            category: ["art"],
            url: "https://www.youtube.com/@sasasakikiki333",
            img: "",
            description: ""
        },
        {
            name: "Elly Clips",
            category: [""],
            url: "https://www.youtube.com/@EllyTwitchClips",
            img: "",
            description: "Ironicamente español es mi primera lengua pero me gustan los \"Word of the day in Spanish\""
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
        },
        {
            name: "Vernoica Explains",
            category: ["tech", "sysadmin"],
            url: "https://www.youtube.com/@VeronicaExplains",
            img: "",
            description: ""
        },
        {
            name: "TheEveling",
            category: ["egl","cosplay"],
            url: "https://www.youtube.com/@TheEveling",
            img: "",
            description: ""
        },
        {
            name: "GabbyJabbyCosplay",
            category: ["cosplay", "anime", "events"],
            url: "https://www.youtube.com/@gabbyjabbycosplay",
            img: "",
            description: ""
        },
        {
            name: "Freya Holmér",
            category: ["gamedev","math"],
            url: "https://www.youtube.com/@acegikmo",
            img: "",
            description: ""
        },
        {
            name: "Moon Channel",
            category: ["cultureAnalysis", "anime", "game"],
            url: "https://www.youtube.com/@moon-channel",
            img: "",
            description: ""
        },
        {
            name: "Negative Legend",
            category: ["animation","analysis"],
            url: "https://www.youtube.com/NegativeLegend",
            img: "",
            description: ""
        },
        {
            name: "Lily G | Inked.Bunnyx",
            category: ["egl"],
            url: "https://www.youtube.com/@Inked.Bunnyx",
            img: "",
            description: ""
        },
        {
            name: "Bringus Studios",
            category: ["tech", "gadgets", "shitposting"],
            url: "https://www.youtube.com/@BringusStudios/",
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
        name: "【Touhou】Cirno & Beer/チルノとビール【東方】",
        category: ["animation"],
        url: "https://www.dailymotion.com/video/x2xg04y",
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