export enum CatType {
    Undefinied,
    Cat,
    SuperCat,
};

export interface Base {
    "name": string;
    "category": Array<string>;
    "url": string;
    "img": string;
    "description": string;
}

export class CatBase {
    name: string = "";
    readonly type
        : CatType.Undefinied | CatType.Cat | CatType.SuperCat
            = CatType.Undefinied; 
}

export class RegularCat extends CatBase {
    name: string = "";
    readonly type = CatType.Cat ;
    lists: Array<Base> = [];
}

export class SuperCat extends CatBase {
    name: string= "";
    readonly type = CatType.SuperCat;
    lists: Array<RegularCat> = [];
}
