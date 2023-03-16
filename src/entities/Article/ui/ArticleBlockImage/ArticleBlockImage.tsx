import { FC, memo } from "react";

import cl from "./ArticleBlockImage.module.scss";
import { ArticleBlockImageProps } from "./ArticleBlockImage.types";

import { cln } from "shared/lib/helpers/classNames";

export const ArticleBlockImage: FC<ArticleBlockImageProps> = memo((props) => {
    const { className } = props;

    return <div className={cln(cl.article_block_image, [className])}></div>;
});
