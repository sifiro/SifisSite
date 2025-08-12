export interface eventType {
    eventName: string;
    category: string;
    year: number;
    location: string;
    img: string;
    description: string;
};

const events: Array<eventType> = [
    {
        eventName: "V Salon Manga de Cadiz",
        year: 2010,
        location: "Cadiz",
        img: "https://femanca.com/wp-content/uploads/2019/08/Cartel-Femanca-2010.jpg",
        description: "",
        category: "manga"
    },
    {
        eventName: "XII || XIII SALÓN MANGA JEREZ",
        year: 2011,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "II Salita del Cómic Iberoamericano",
        year: 2011,
        location: "Caceres",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "V Salon del manga de Sevilla",
        year: 2012,
        location: "Sevilla",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "XIV SALÓN MANGA JEREZ",
        year: 2012,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Basingstoke Anime Society (Sep-Dec)",
        year: 2017,
        location: "Basingstoke",
        img: "",
        description: "No lo llamaria Evento pero por dejar constancia",
        category: "manga|meetup"
    },
    {
        eventName: "Update Conference 2018",
        year: 2018,
        location: "Prague",
        img: "",
        description: "",
        category: "dev"
    },
    {
        eventName: "Tio Pepe - Alan Parsons Live Project",
        category: "live",
        year: 2019,
        location: "Jerez",
        img: "",
        description: ""
    },
    {
        eventName: "Tio Pepe - Simple Minds",
        category: "live",
        year: 2022,
        location: "Jerez",
        img: "",
        description: ""
    },
    {
        eventName: "GiroComic 2022",
        year: 2022,
        location: "Girona",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "MalagaJam 16 - Summer Edition",
        year: 2023,
        location: "Malaga",
        img: "",
        description: "",
        category: "gamejam"
    },
    {
        eventName: "MalagaJam 17-18",
        year: 2023,
        location: "Malaga",
        img: "",
        description: "",
        category: "gamejam"
    },
    {
        eventName: "Cadiz GameDev Meetup I-II",
        year: 2023,
        location: "San Fernando",
        img: "",
        description: "",
        category: "meetup"
    },
    {
        eventName: "26 Salón Manga de Jerez",
        year: 2023,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "MalagaJam 19-20",
        year: 2024,
        location: "Malaga",
        img: "",
        description: "",
        category: "gamejam"
    },
    {
        eventName: "Cadiz GameDev Meetup III-IV",
        year: 2024,
        location: "San Fernando",
        img: "",
        description: "",
        category: "meetup"
    },
    {
        eventName: "Mangafest Jerez Primavera 2024",
        year: 2024,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "MalagaJam 19-20",
        year: 2024,
        location: "Malaga",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Puerto Asian Fest && Cadiz GameDevJam II",
        year: 2024,
        location: "El Puerto De Santa Maria",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "MikuExpo 2024",
        year: 2024,
        location: "London",
        img: "",
        description: "",
        category: "live"
    },
    {
        eventName: "MCM ComicCon London",
        year: 2024,
        location: "London",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "La Navidad más Friki 2024",
        category: "manga",
        year: 2024,
        location: "Cadiz",
        img: "",
        description: ""
    },
    {
        eventName: "MalagaJam 21",
        year: 2025,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "ExpoOtaku Jerez 2025",
        year: 2025,
        location: "Jerez",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "MangaFest Sevilla Deluxe",
        year: 2025,
        location: "Sevilla",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "FicZone 2025",
        year: 2025,
        location: "Granada",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "XX Dia Friki Cadiz",
        year: 2025,
        location: "Cadiz",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Jornada Friki El Puerto",
        year: 2025,
        location: "El Puerto de Santa Maria",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Guadalindie II",
        year: 2025,
        location: "Malaga",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Japan Weekend VLC",
        year: 2025,
        location: "Malaga",
        img: "",
        description: "",
        category: "manga"
    },
    {
        eventName: "Cadiz GameDev Meetup V",
        year: 2025,
        location: "Cadiz",
        img: "",
        description: "",
        category: "meetup"
    },
    {
        eventName: "San Fernando MangaWorld II",
        year: 2025,
        location: "San Fernando",
        img: "",
        description: "",
        category: "meetup"
    },
    {
        eventName: "Puerto Asian Fest II",
        year: 2025,
        location: "El Puerto de Santa Maria",
        img: "",
        description: "",
        category: "meetup"
    },
    {
        eventName: "Mercadillo Friki del Puerto",
        year: 2025,
        location: "El Puerto de Santa Maria",
        img: "",
        description: "",
        category: "meetup"
    }
    ,
    {
        eventName: "Japan Weekend Madrid",
        year: 2025,
        location: "Madrid",
        img: "",
        description: "",
        category: "meetup"
    }
]

export { events };
