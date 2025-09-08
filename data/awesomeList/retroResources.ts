import {CatType, type RegularCat, type SuperCat} from "../typeDatas";

const shops: RegularCat = {
    name: "Retro PC Community Resources",
    lists: [
        {
            name: "Vogons",
            url: "https://www.vogons.org/",
            img: "",
            description: "Principal foro centralizado de PC Retro",
            category: ["pc"]
        },
        {
            name: "Retro Computing Internet Resources",
            category: [""],
            url: "https://github.com/ssshake/retro-computing-internet-resources",
            img: "",
            description: "Recopilacion de Servicios de Internet Retro"
        },
        {
            name: "BetaWiki",
            category: [""],
            url: "https://betawiki.net/wiki/Main_Page",
            img: "",
            description: "Zona sobre informacion de Betas (interesante para OS Antiguos)"
        }
    ],
    type: CatType.Cat
};

const styles: RegularCat = {
    name: "OS Retros",
    lists: [
        {
            name: "Debian Old Releases",
            category: [""],
            url: "https://cdimage.debian.org/mirror/cdimage/archive/",
            img: "",
            description: "",
        },
        {
            name: "WinWorld PC",
            category: [""],
            url: "https://winworldpc.com/library/operating-systems",
            img: "",
            description: "Principalmente ISOs de Windows pero tienen resources de Unix Antiguos"
        },
        {
            name: "GuadaLinex ISOs",
            category: [""],
            url: "https://archive.org/search?query=GuadaLinex&and[]=mediatype%3A%22software%22",
            img: "",
            description: ""
        },
        {
            name: "Linex ISOs",
            category: [""],
            url: "https://archive.org/search?query=creator%3A%22JUNTA+DE+EXTREMADURA%2CLINEX%22",
            img: "",
            description: ""
        },
        {
            name: "SoloLinux",
            category: [""],
            url: "https://archive.org/search?query=subject%3A%22sololinux%22",
            img: "",
            description: "SoloLinux fue una revista de los mid 2000's que incluian CD con diferentes distros"
        }
    ],
    type: CatType.Cat
};

const brands: RegularCat = {
    name: "Misc",
    lists: [
        {
            name: "Make a Simulated Dial-up Connection (DreamPi)",
            category: ["Regular"],
            url: "https://segaretro.org/DreamPi",
            img: "",
            description: "",
        }
    ],
    type: CatType.Cat
};

const idolMasterSpecific: RegularCat = {
    name: "Service Survivals",
    lists: [
        {
            name: "Escargot",
            url: "",
            img: "",
            description: "Re-Implementacion de MSN Messenger",
            category: [""]
        },
        {
            name: "NinaChat",
            category: [""],
            url: "https://nina.chat/",
            img: "",
            description: "ReImplementacion de AOL, AIM, ICQ, Yahoo y Q-Link"
        },
        {
            name: "QuantumLink",
            category: [""],
            url: "https://quantumlink.net/",
            img: "",
            description: ""
        },
        {
            name: "Console Service Preservation Projects",
            category: [""],
            url: "https://emulation.gametechwiki.com/index.php/Preservation_projects#Private_Platform_Servers",
            img: "",
            description: ""
        }
    ],
    type: CatType.Cat
};

export const retroResourcesList: SuperCat = {
    name: "JFashion List",
    lists: [
        brands,
        shops,
        styles,
        idolMasterSpecific
    ],
    type: CatType.SuperCat
}