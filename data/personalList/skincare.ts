export interface skinCareType {
    type: string;
    manufacturer: string;
    model: string;
    activityYear: string;
}

export const skinCare: Array<skinCareType> = [
    {
        type: "Cleaner (Gel)",
        manufacturer: "Clinque",
        model: "Liquid Facial Soap Mild",
        activityYear: "2024-"
    },
    {
        type: "Base/Toner",
        manufacturer: "Bioderma",
        model: "SensiBio Defensive",
        activityYear: "2022-"
    },
    {
        type: "Facial Sunscreen",
        manufacturer: "ISDIN",
        model: "Fusion Water Magic SPF 50",
        activityYear: "2023-"
    },
    {
        type: "Cleaner (Gel)",
        manufacturer: "Frudia",
        model: "My Orchard Mochi Peach",
        activityYear: "2022-2023"
    }
]