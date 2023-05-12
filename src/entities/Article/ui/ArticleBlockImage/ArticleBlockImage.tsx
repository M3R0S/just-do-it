import { FC, memo } from "react";

import cl from "./ArticleBlockImage.module.scss";
import { ArticleBlockImageProps } from "./ArticleBlockImage.types";

import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";

export const ArticleBlockImage: FC<ArticleBlockImageProps> = memo((props) => {
    const { className, block } = props;

    return (
        <div className={cln(cl.article_block_image, [className])}>
            <img
                src={block.src}
                className={cl.img}
                alt={block.title ?? "Неизвестное изображение"}
            />
            {block.title && (
                <Text
                    isTitle
                    tag="h3"
                    size="m"
                    align="center"
                    text={block.title}
                />
            )}
        </div>
    );
});
