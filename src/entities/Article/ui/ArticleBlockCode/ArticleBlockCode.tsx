import { FC, memo } from "react";

import cl from "./ArticleBlockCode.module.scss";
import { ArticleBlockCodeProps } from "./ArticleBlockCode.types";

import { cln } from "shared/lib/helpers/classNames";
import { Code } from "shared/ui/Code";

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = memo((props) => {
    const { className, block } = props;

    return (
        <Code
            className={cln(cl.article_block_code, [className])}
            text={block.code}
        />
    );
});
