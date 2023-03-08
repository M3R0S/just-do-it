import { SidebarLinkItemText, SidebarLinksList } from "./Sidebar.types";

import LinkAboutSvg from "shared/assets/svg/link_about.svg";
import LinkHomeSvg from "shared/assets/svg/link_home.svg";
import LinkProfileSvg from "shared/assets/svg/link_profile.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const sidebarLinksList: SidebarLinksList = [
    {
        id: "1",
        path: PathRoutes.MAIN,
        text: SidebarLinkItemText.MAIN,
        Icon: LinkHomeSvg,
    },
    {
        id: "2",
        path: PathRoutes.ABOUT,
        text: SidebarLinkItemText.ABOUT_US,
        Icon: LinkAboutSvg,
    },
    {
        id: "3",
        path: PathRoutes.PROFILE,
        text: SidebarLinkItemText.PROFILE,
        Icon: LinkProfileSvg,
    },
];
