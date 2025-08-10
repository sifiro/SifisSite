import { artistMerch } from "./awesomeList/artistsMerch";
import { communities } from "./awesomeList/communites";
import { cosplayResources } from "./awesomeList/cosplayResources";
import { discordCommunities } from "./awesomeList/discordCommunities";
import { eventCommunities } from "./awesomeList/eventsCommunites";
import { jfashionList } from "./awesomeList/jfashionAwesome";
import type { RegularCat, SuperCat } from "./typeDatas";

export const awesomeLists: ReadonlyArray<SuperCat | RegularCat> = [
    jfashionList,
    eventCommunities,
    discordCommunities,
    communities,
    cosplayResources,
    artistMerch
]