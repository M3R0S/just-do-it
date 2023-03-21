import { FC, SVGProps } from "react";

export type SidebarLinkItemText = "Main" | "About us" | "Profile" | "Articles";

export interface SidebarLinkItem {
    id: string;
    path: string;
    text: SidebarLinkItemText;
    Icon: FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export type SidebarLinksList = SidebarLinkItem[];

export interface SidebarProps {
    className?: string;
}
