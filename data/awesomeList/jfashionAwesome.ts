import {CatType, type Base, type RegularCat, type SuperCat} from "../typeDatas";

const shops: RegularCat = {
    name: "Shops",
    lists: [{
        name: "Lolita Wardrobe",
        url: "https://lolitawardrobe.com/",
        img: "",
        description: "Tienda de Lolita Fashion que admite IOSS",
        category: ["egl"]
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
            name: "United Tokyo",
            category: ["Regular"],
            url: "",
            img: "",
            description: "",
        },
        {
            name: "Converse Tokyo",
            category: ["Regular"],
            url: "",
            img: "",
            description: "",
        },
        {
            name: "ListenFlavor",
            category: ["alt"],
            url: "",
            img: "",
            description: "",
        },
        {
            name: "RoyalPrincessAlice",
            category: ["egl"],
            url: "",
            img: "",
            description: ""
        },
        {
            name: "OZZON JAPAN",
            category: ["egl"],
            url: "",
            img: "",
            description: ""
        },
    ],
    type: CatType.Cat
};

const idolMasterSpecific: RegularCat = {
    name: "idolm@ster Specific Outfits",
    lists: [
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
        brands,
        shops,
        styles,
        idolMasterSpecific
    ],
    type: CatType.SuperCat
}