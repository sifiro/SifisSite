import { communities } from "./awesomeList/communites";
import { discordCommunities } from "./awesomeList/discordCommunities";
import { eventCommunities } from "./awesomeList/eventsCommunites";
import { jfashionList } from "./awesomeList/jfashionAwesome";
import type { RegularCat, SuperCat } from "./typeDatas";

export const awesomeLists: ReadonlyArray<SuperCat | RegularCat> = [
    jfashionList,
    eventCommunities,
    discordCommunities,
    communities
]