export interface Guitar {
    Manufacturer: string;
    Type: string;
    Model: string;
    Origin: string;
    ActivityYear: string;
    NeckPickup?: string;
    MiddlePickup?: string;
    BridgePickup?: string;
    Description: string;
}

export interface Artist {
    artist: string;
    song: string;
    description: string;
}

export interface originalSongs {
    song: string;
    link: string;
    description: string;
    year: number;
}

export interface Live {
    eventName: string;
    tracklist: Array<Artist>;
    year: number;
}

export const guitars: Array<Guitar> =
    [
        {
            Manufacturer: "Fender",
            Type: "Electric",
            Model: "Telecaster Modern Player Plus",
            Origin: "China",
            Description: "Stock",
            BridgePickup: "MP-H1F (Stock)",
            NeckPickup: "MP-S1N-BK (Stock-Single T-Type)",
            MiddlePickup: "MP-S1M-BK (Stock-Single)",
            ActivityYear: "2018-"
        },
        {
            Manufacturer: "Fender",
            Type: "ElectroAcoustic",
            Model: "CD60-CE",
            Origin: "China",
            BridgePickup: "Fishman Isys III System",
            Description: "1/6 Clavijeros cambiados, cejuela cambiada, Puerto Jack Remplazado (No Original)",
            ActivityYear: "2011-"
        },
        {
            Manufacturer: "MadCatz",
            Type: "MIDI",
            Model: "Rock Band 3 Pro Guitar Wii",
            Origin: "China",
            Description: "Se ha usado y grabado para composiciones que usado en Rock Band 3",
            ActivityYear: "2014-"
        },
        {
            Manufacturer: "Epiphone",
            Type: "Electric",
            Model: "Les Paul Special II",
            Origin: "Indonesia",
            NeckPickup: "Epiphone 650R",
            BridgePickup: "Epiphone 700T",
            ActivityYear: "2009-",
            Description: "Media raja detras del mastil, abolladura en la cabeza y Tone Knob Missing",
        },
        {
            Manufacturer: "Enrique",
            Type: "Classical",
            Model: "N/A",
            Origin: "N/A",
            ActivityYear: "2008-2011",
            Description: ""
        }
    ]

export const live: Array<Live> =
    [
        {
            eventName: "Concierto Solidario - Josefinas",
            tracklist: [
                {
                    artist: "Natsumi Kiyoura",
                    song: "Tabi no Tochuu",
                    description: "A Solas"
                }
            ],
            year: 2013
        }
    ];

export const ogSongs: Array<originalSongs> = [
    {
        song: "Experiments",
        link: "",
        description: "Conjunto de progresiones de 7 secciones diferentes, destacando la seccion \"Galaxy\"",
        year: 0
    },
    {
        song: "Prologue",
        link: "",
        description: "[MIDI]Intencion de usarse en TFG del juego con Custom Engine",
        year: 0
    },
    {
        song: "Post-Prologue Battle Song (I)",
        link: "",
        description: "[MIDI]Intencion de usarse en TFG del juego con Custom Engine",
        year: 0
    },
    {
        song: "Post-Prologue Battle Song (II)",
        link: "",
        description: "[MIDI]Intencion de usarse en TFG del juego con Custom Engine",
        year: 0
    },
    {
        song: "Alt Battle Song (I)",
        link: "",
        description: "[Guitar]Intencion de usarse en TFG del juego con Custom Engine",
        year: 0
    },
    {
        song: "Alt Battle Song (II)",
        link: "",
        description: "[Guitar]Intencion de usarse en TFG del juego con Custom Engine",
        year: 0
    },
    {
        song: "Depression",
        link: "",
        description: "Intencion de usarse en II Spain Game Jam",
        year: 0
    }
];

export const songsCovered: Array<Artist> = [
    {
        artist: "ZUN",
        song: "The Doll Maker Of Bucuresti",
        description: "Version Regular y Arreglo Jazz"
    },
    {
        artist: "ZUN",
        song: "Wind God Girl",
        description: "Adaptacion"
    },
    {
        artist: "ZUN",
        song: "Voyage 1969",
        description: "Adaptacion"
    },
    {
        artist: "ZUN",
        song: "Necrofantasia",
        description: "Adaptacion"
    },
    {
        artist: " Chihaya Kisaragi (iM@S)",
        song: "Yakusoku",
        description: "Adaptacion"
    },
    {
        artist: "Agoaniki-P (Megurine Luka)",
        song: "Double Lariat",
        description: "Original"
    },
    {
        artist: "Ray",
        song: "ebb and flow",
        description: "Unplugged Instrumental"
    }
];