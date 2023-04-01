import { FC, SVGProps } from "react";

import { ArticleView } from "entities/Article";

export interface ArticlesViewSwitcherProps {
    className?: string;
}

export interface ViewTypes {
    id: string;
    view: ArticleView;
    svg: FC<SVGProps<SVGSVGElement>>;
}
