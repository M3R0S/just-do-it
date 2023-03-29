import { ViewTypes } from "./ArticleViewSwitcher.types";

import TileSvg from "shared/assets/svg/tile.svg";
import ListSvg from "shared/assets/svg/list.svg";

export const viewTypes: ViewTypes[] = [
    {
        id: "1",
        view: "tile",
        svg: TileSvg,
    },
    {
        id: "2",
        view: "list",
        svg: ListSvg,
    },
];
