import { FC, memo } from "react";

import cl from "./ArticleBlockText.module.scss";
import { ArticleBlockTextProps } from "./ArticleBlockText.types";

import { cln } from "shared/lib/helpers/classNames";

export const ArticleBlockText: FC<ArticleBlockTextProps> = memo((props) => {
    const { className } = props;

    return <div className={cln(cl.article_block_text, [className])}></div>;
});
