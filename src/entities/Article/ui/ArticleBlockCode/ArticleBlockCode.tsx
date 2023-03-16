import { FC, memo } from "react";

import cl from "./ArticleBlockCode.module.scss";
import { ArticleBlockCodeProps } from "./ArticleBlockCode.types";

import { cln } from "shared/lib/helpers/classNames";

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = memo((props) => {
    const { className } = props;

    return <div className={cln(cl.article_block_code, [className])}></div>;
});
