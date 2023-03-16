import React from "react";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { ValueOf } from "shared/lib/types/helpersTypes";

export const SidebarLinkItemText = {
    MAIN: "Main",
    ABOUT_US: "About us",
    PROFILE: "Profile",
    ARTICLES: "Articles"
} as const;

export type SidebarLinkItemText = ValueOf<typeof SidebarLinkItemText>;

export interface SidebarLinkItem {
    id: string;
    path: PathRoutes;
    text: SidebarLinkItemText;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export type SidebarLinksList = SidebarLinkItem[];

export interface SidebarProps {
    className?: string;
}
