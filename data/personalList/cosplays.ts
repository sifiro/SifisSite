interface cosplayType {
    characterName: string;
    seriesName: string;
    outfitName?: string;
    pending: string;
    done: string;
    trackList?: Array<string>;
    eventPlanned?: Array<string>;
    eventDone?: Array<string>;
};

const cosplay: Array<cosplayType> = [
    {
        characterName: "Bocchi",
        seriesName: "Bocchi The Rock",
        pending: "",
        done: "",
        trackList: ["Distorsion"],
        eventDone: ["2023"]
    },
    {
        characterName: "Shishiro Botan",
        seriesName: "Hololive",
        outfitName: "Debut",
        pending: "Make-up, Stocking (brokish)",
        done: "Clothes, Shoes(sorta), ",
        eventPlanned: ["Cadiz 2025"]
    },
    {
        characterName: "Suisei Hoshiicahi",
        seriesName: "Hololive",
        outfitName: "Debut",
        pending: "Wig,",
        done: "clothes",
        trackList: ["Caramel Pain (WIP)"],
    },
    {
        characterName: "Megurine Luka",
        seriesName: "Vocaloid",
        outfitName: "Original",
        pending: "Accesories adjustments",
        done: "clothes",
    }
]

export { cosplay };
