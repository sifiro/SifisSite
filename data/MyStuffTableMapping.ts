import type {cosplayType} from "./personalList/cosplays";
import type {eventType} from "./personalList/eventsStory";
import type {Guitar} from "./personalList/guitars";
import type {skinCareType} from "./personalList/skincare";

export enum EtypeContent {
    Events,
    Guitars,
    SkinCare,
    Cosplay
}

type ContentTypeTable = {
    displayName: string;
    header: Array<string>;
    mappingFunction: (e: any) => (string | undefined)[];
};

export const exportTypes: { [key in EtypeContent]: ContentTypeTable } = {
    [EtypeContent.Events]: {
        displayName: "Events",
        header: [
            "Year",
            "Event Name",
            "Category",
            "Location",
            "Description",
        ],
        mappingFunction:
            (e: eventType) => [
                e.year.toString(),
                e.eventName,
                e.category,
                e.location,
                e.description
            ]
    },
    [EtypeContent.Cosplay]: {
        displayName: "Cosplay",
        header: ["Character Name",
            "Series Name",
            "Outfit Name",
            "Pending",
            "Done",
            "Event Planned",
            "Event Done",
            "TrackList (Guitar)"],
        mappingFunction: (e: cosplayType) => [
            e.characterName,
            e.seriesName,
            e.outfitName,
            e.pending,
            e.done,
            e.eventPlanned && e.eventPlanned.length !== 0
                ? e.eventPlanned.reduce((x, y) => x + "," + y)
                : "",
            e.eventDone && e.eventDone.length !== 0
                ? e.eventDone.reduce((x, y) => x + "," + y)
                : "",
            e.trackList && e.trackList.length !== 0
                ? e.trackList.reduce((x, y) => x + "," + y)
                : "",
        ]
    },
    [EtypeContent.Guitars]: {
        displayName: "Guitar",
        header: [
            "Manufacturer",
            "Type",
            "Model",
            "Origin",
            "Activity Year",
            "Description",
        ],
        mappingFunction: (e: Guitar) => [
            e.Manufacturer,
            e.Type,
            e.Model,
            e.Origin,
            e.ActivityYear,
            e.Description,
        ]
    },
    [EtypeContent.SkinCare]: {
        displayName: "SkinCare",
        header: [
            "Type",
            "Manufacturer",
            "Model",
            "Activity Year",
        ],
        mappingFunction: (e: skinCareType) => [
            e.type,
            e.manufacturer,
            e.model,
            e.activityYear
        ]
    }
}