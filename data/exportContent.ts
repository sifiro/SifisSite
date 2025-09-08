import {artistMerch} from "./awesomeList/artistsMerch";
import {communities} from "./awesomeList/communites";
import {cosplayResources} from "./awesomeList/cosplayResources";
import {discordCommunities} from "./awesomeList/discordCommunities";
import {eventCommunities} from "./awesomeList/eventsCommunites";
import {jfashionList} from "./awesomeList/jfashionAwesome";
import {guitarResources} from "./awesomeList/musicResources";
import {youtuber} from "./awesomeList/ytubers";
import {EtypeContent} from "./MyStuffTableMapping";
import {cosplay} from "./personalList/cosplays";
import {events} from "./personalList/eventsStory";
import {guitars} from "./personalList/guitars";
import {skinCare} from "./personalList/skincare";
import {console} from "./personalList/gadgets";
import type {RegularCat, SuperCat} from "./typeDatas";
import { techResourcesList } from "./awesomeList/techResources";
import { retroResourcesList } from "./awesomeList/retroResources";

export const awesomeLists: ReadonlyArray<SuperCat | RegularCat> = [
    jfashionList,
    eventCommunities,
    discordCommunities,
    communities,
    cosplayResources,
    artistMerch,
    youtuber,
    guitarResources,
    techResourcesList,
    retroResourcesList
]


export type MyStuffType = {
    [key in EtypeContent]: Array<any>;
};

export const personalStuff: MyStuffType = 
{
    [EtypeContent.Events]: events,
    [EtypeContent.Cosplay]: cosplay,
    [EtypeContent.Guitars]: guitars,
    [EtypeContent.SkinCare]: skinCare,
    [EtypeContent.Consoles]: console
}