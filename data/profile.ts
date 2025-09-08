export interface profile {
    profile: string;
    fandoms: Array<string>;
    hobbys: Array<string>;
    favorutieCharacters : Array<Characters>
}

interface Characters{
    name: string,
    series: string,
    img: string
}

interface socialNetwork {
    image: string;
    name: string;
    url: string;
}

export const personalLinks: Array<socialNetwork> = [
    {
        image: "/assets/banners/itchio.gif",
        name: "Itch.io",
        url: "https://othascarlet.itch.io/"
    },
    {
        image: "/assets/banners/bsky.jpg",
        name: "BSky",
        url: "https://bsky.app/profile/sifi.bsky.social"
    },
    {
        image: "",
        name: "Mastodon",
        url: "https://owo.cafe/@Sifi"
    },
    {
        image: "https://88by31.neocities.org/ext%20links/0twitter.gif",
        name: "Twitter",
        url: "https://twitter.com/sifiro"
    },
    {
        image: "",
        name: "AniList",
        url: "https://anilist.co/user/Sifi/"
    },
    {
        image: "",
        name: "VRChat",
        url: "https://vrchat.com/home/user/usr_edfee031-7e53-4554-8bf2-39940f4743f3"
    },
    {
        image: "/assets/banners/steam.jpg",
        name: "Steam",
        url: "https://steamcommunity.com/id/sifiro"
    }
];

export const profileList: profile = {
    profile: "",
    fandoms: [
        "Virtual Idols (Idolm@ster (Every franch, SideM Included), Aikatsu, LL, AKB0048)",
        "VTuber (Hololive)",
        "Girls Band (Show By Rock, Bandori, Girls Band Cry, Boochi The Rock)",
        "Umamusume",
        "Precure (og, Heartcatch, Wonderful)",
        "Clamp Works (CCS, Kobato, Chobits...)",
        "Vocaloid/Voiceroid"
    ],
    hobbys: [
        "Anime",
        "Gaming",
        "Going to GameJams (to make Games)",
        "Playing Guitar (Mostly Improvisation)",
        "VirtualReality/Motion Capture Stuff",
        "Programming (Multimedia Stuff)",
        "HomeLab",
        "Reverse Engineering",
        "Developing (Unattended) Party Boxes",
        "Karaoke",
        "Computer Tinkering",
        "Cosplay Beginner/Wannabe",
        "Retro-Computing"
    ],
    favorutieCharacters: [
        {
            name: "Hoshii Miki",
            series: "the iDOLM@STER",
            img: "https://project-imas.wiki/images/a/aa/Miki_TD_SR18.png"
        },
        {
            name: "Victorique De Bois",
            series: "GOSICK",
            img: "https://cdn.myanimelist.net/images/characters/13/309804.jpg"
        }
    ]
}

const hobby : Array<{title: string, content: Array<string>}> = 
	[
		{
  			title: "Hobbies",
  			content: profileList.hobbys
		}
	]
