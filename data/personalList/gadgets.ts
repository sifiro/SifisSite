

export interface DefaultCata {
    name: string;
    description: string;
    state: string;
}

export interface DefaultCataWithYears extends DefaultCata {
    year: string;
}

export const console: Array<DefaultCataWithYears> = [
    {
        year: "2004",
        name: "GameBoy Advance SP",
        description: "",
        state: "Missing"
    },
    {
        year: "2006",
        name: "Nintendo DS Phat",
        description: "Fue Remplazada por falla en la circuiteria de carga",
        state: "Only Motherboard"
    },
    {
        year: "2006",
        name: "Nintendo Wii",
        description: "Fue remplazada por falla del Lector",
        state: "Working"
    },
    {
        year: "2008",
        name: "Nintendo DS Lite",
        description: "Bisagra floja/rota",
        state: "Working"
    },
    {
        year: "2010",
        name: "PSP 3000",
        description: "",
        state: "Display Broken"
    },
    {
        year: "2013",
        name: "PS3 Slim 3000",
        description: "",
        state: "Working"
    },
    {
        year: "2015",
        name: "PSP GO",
        description: "",
        state: "Working"
    },
    {
        year: "2015",
        name: "PSTV",
        description: "",
        state: "Working"
    },
    {
        year: "2015",
        name: "Nintendo 2DS",
        description: "",
        state: "Lent to Andres"
    },
    {
        year: "2017",
        name: "PS4 Pro",
        description: "",
        state: "Working"
    },
    {
        year: "2018",
        name: "PSVita 3G",
        description: "",
        state: "Working"
    },
    {
        year: "2019",
        name: "Nintendo 2DS XL",
        description: "",
        state: "Working"
    }
]