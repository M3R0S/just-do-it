import { FC, SVGProps } from "react";

import { ArticleView } from "entities/Article";

export interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

export interface ViewTypes {
    id: string;
    view: ArticleView;
    svg: FC<SVGProps<SVGSVGElement>>;
}
