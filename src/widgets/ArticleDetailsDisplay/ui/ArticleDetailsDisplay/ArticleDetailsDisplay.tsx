import { FC } from "react";

import cl from "./ArticleDetailsDisplay.module.scss";
import { ArticleDetailsDisplayProps } from "./ArticleDetailsDisplay.types";
import { ArticleDetailsDisplayHeader } from "../ArticleDetailsDisplayHeader/ArticleDetailsDisplayHeader";

import { ArticleDetails } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";

export const ArticleDetailsDisplay: FC<ArticleDetailsDisplayProps> = (props) => {
    const { className, id } = props;

    return (
        <div className={cln(cl.article_details_display, [className])}>
            <ArticleDetailsDisplayHeader />
            <ArticleDetails id={id} />
        </div>
    );
};
