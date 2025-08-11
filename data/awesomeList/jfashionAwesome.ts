import {CatType, type Base, type RegularCat, type SuperCat} from "../typeDatas";

const inspiration: RegularCat = {
    name: "Inspiration / Misc",
    lists: [
        {
            name: "Style Arena",
            url: "https://www.style-arena.jp/",
            img: "",
            description: "Fashion Report Japonesa",
            category: [""]
        },
        {
            name: "Tokyo Fashion",
            url: "https://tokyofashion.com/",
            img: "",
            description: "Fashion Report Japonesa",
            category: [""]
        }
    ],
    type: CatType.Cat
};

const shops: RegularCat = {
    name: "Shops",
    lists: [
        {
            name: "Lolita Wardrobe",
            url: "https://lolitawardrobe.com/",
            img: "",
            description: "Tienda de Lolita Fashion",
            category: ["egl","ioss"]
        },
        {
            name: "Madame Chocolat",
            url: "https://www.madamechocolat-shop.com/",
            img: "",
            description: "Tienda de Alt Fashion en la Peninsula.",
            category: ["alt"]
        }
    ],
    type: CatType.Cat
};

const styles: RegularCat = {
    name: "Styles",
    lists: [
        {
            name: "Jersey Maid",
            url: "https://j-fashion.fandom.com/wiki/Jersey_Maid",
            img: "",
            description: "",
            category: [""]
        },
    ],
    type: CatType.Cat
};

const brands: RegularCat = {
    name: "Brands",
    lists: [
        {
            name: "Koit Foot Wear",
            category: ["egl", "goth", "ioss"],
            url: "https://www.koifootwear.com/",
            img: "",
            description: "Tienda Britanica de zapatos alt",
        },
        {
            name: "United Tokyo",
            category: ["regular"],
            url: "https://united-tokyo.com/",
            img: "",
            description: "",
        },
        {
            name: "Converse Tokyo",
            category: ["regular"],
            url: "https://converse-tokyo.jp/",
            img: "",
            description: "",
        },
        {
            name: "ListenFlavor",
            category: ["alt"],
            url: "https://listenflavor.com/",
            img: "",
            description: "",
        },
        {
            name: "RoyalPrincessAlice",
            category: ["egl"],
            url: "https://royalprincessalice.net/",
            img: "",
            description: ""
        },
        {
            name: "OZZON JAPAN",
            category: ["egl"],
            url: "https://ozzon-japan.jp/",
            img: "",
            description: ""
        },
        {
            name: "NO.S PROJECT",
            category: ["egl"],
            url: "https://nos-project.jp/",
            img: "",
            description: ""
        },
        {
            name: "Maiden's Rêve❤",
            category: ["egl"],
            url: "https://maidensreve.kawaiishop.jp/",
            img: "",
            description: ""
        },
        {
            name: "MAYLA",
            category: ["shoes"],
            url: "https://lit.link/en/dollsrecruit",
            img: "",
            description: ""
        },
        {
            name: "Epetice",
            category: ["egl"],
            url: "https://epetice.com/",
            img: "",
            description: ""
        }
    ],
    type: CatType.Cat
};

const idolMasterSpecific: RegularCat = {
    name: "idolm@ster Specific Outfits",
    lists: [
        {
            name: "Cinderella Museum",
            category: [""],
            url: "https://cinderellamuseum.wixsite.com/cinderella-museum",
            img: "",
            description: "Evento/Exhibicion de Cosmakers de deresute."
        },
        {
            name: "トップ!クローバー",
            url: "",
            img: "",
            description: "",
            category: [""]
        },
        {
            name: "スターピースメモリーズ",
            url: "",
            img: "",
            description: "",
            category: [""]
        },
        {
            name: "ティータイムハピネス",
            category: [""],
            url: "",
            img: "",
            description: "",
        },
    ],
    type: CatType.Cat
};

export const jfashionList: SuperCat = {
    name: "JFashion List",
    lists: [
        inspiration,
        brands,
        shops,
        styles,
        idolMasterSpecific
    ],
    type: CatType.SuperCat
}