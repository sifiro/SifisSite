export enum archivementCategory
{
    Regular,
    Rare,
    EpicFail,
}

export interface archivement
{
    type: archivementCategory;
    img: string;
    name: string;
    description:string ;
} 

const archivementList: Array<archivement> = [
    {
        type: archivementCategory.Regular,
        img: "",
        name: "",
        description: ""
    }
]

export { archivementList };