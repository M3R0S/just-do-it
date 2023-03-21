import { createSelector } from "@reduxjs/toolkit";

import { SidebarLinksList } from "../types/sidebar";

import { getUserAuthData } from "entities/User";
import LinkAboutSvg from "shared/assets/svg/link_about.svg";
import LinkHomeSvg from "shared/assets/svg/link_home.svg";
import LinkProfileSvg from "shared/assets/svg/link_profile.svg";
import ArticleSvg from "shared/assets/svg/link_articles.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarLinksList: SidebarLinksList = [
        {
            id: "1",
            path: PathRoutes.MAIN,
            text: "Main",
            Icon: LinkHomeSvg,
        },
        {
            id: "2",
            path: PathRoutes.ABOUT,
            text: "About us",
            Icon: LinkAboutSvg,
        },
    ];

    if (userData) {
        sidebarLinksList.push(
            {
                id: "3",
                path: PathRoutes.PROFILE + userData.id,
                text: "Profile",
                Icon: LinkProfileSvg,
                authOnly: true,
            },
            {
                id: "4",
                path: PathRoutes.ARTICLES,
                text: "Articles",
                Icon: ArticleSvg,
                authOnly: true,
            }
        );
    }

    return sidebarLinksList;
});
