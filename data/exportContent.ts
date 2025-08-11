import {artistMerch} from "./awesomeList/artistsMerch";
import {communities} from "./awesomeList/communites";
import {cosplayResources} from "./awesomeList/cosplayResources";
import {discordCommunities} from "./awesomeList/discordCommunities";
import {eventCommunities} from "./awesomeList/eventsCommunites";
import {jfashionList} from "./awesomeList/jfashionAwesome";
import {youtuber} from "./awesomeList/ytubers";
import {cosplay} from "./personalList/cosplays";
import type {cosplayType} from "./personalList/cosplays";
import type {RegularCat, SuperCat} from "./typeDatas";

export const awesomeLists: ReadonlyArray<SuperCat | RegularCat> = [
    jfashionList,
    eventCommunities,
    discordCommunities,
    communities,
    cosplayResources,
    artistMerch,
    youtuber
]

export interface MyStuffType {
    cosplay: Array<cosplayType>;
}

export const personalStuff: MyStuffType =
{
        cosplay: cosplay
}