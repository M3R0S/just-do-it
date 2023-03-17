import { FC, memo } from "react";

import cl from "./ArticleBlockText.module.scss";
import { ArticleBlockTextProps } from "./ArticleBlockText.types";

import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";

export const ArticleBlockText: FC<ArticleBlockTextProps> = memo((props) => {
    const { className, block } = props;

    return (
        <div className={cln(cl.article_block_text, [className])}>
            {block.title && (
                <Text
                    isTitle
                    tag="h2"
                    className={cl.title}
                >
                    {block.title}
                </Text>
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text
                    tag="p"
                    key={index}
                    className={cl.paragraph}
                >
                    {paragraph}
                </Text>
            ))}
        </div>
    );
});
