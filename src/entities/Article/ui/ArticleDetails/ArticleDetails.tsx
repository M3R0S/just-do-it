import { FC, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetails.module.scss";
import { ArticleDetailsProps } from "./ArticleDetails.types";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { ArticleBlock } from "../../model/types/article";
import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";

import EyeSvg from "shared/assets/svg/eye.svg";
import CalendarSvg from "shared/assets/svg/calendar.svg";
import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar";
import { Svg } from "shared/ui/Svg";

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case "CODE":
            return (
                <ArticleBlockCode
                    key={block.id}
                    block={block}
                />
            );
        case "IMAGE":
            return (
                <ArticleBlockImage
                    key={block.id}
                    block={block}
                />
            );
        case "TEXT":
            return (
                <ArticleBlockText
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
    }
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { className, id } = props;

    useDynamicReducerLoader({ reducers });
    const dispatch = useAppDispatch();
    const { t } = useTranslation("articlePage");

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content: JSX.Element;

    if (isLoading) {
        content = (
            <div className={cl.skeleton}>
                <Skeleton
                    className={cl.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton
                    className={cl.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    width={600}
                    height={24}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = <Text align="center">{t("An error occurred while loading the article")}</Text>;
    } else {
        content = (
            <article className={cl.article}>
                <Avatar
                    width={200}
                    height={200}
                    src={data?.img}
                    className={cl.article_avatar}
                />
                <Text
                    size="size_xl"
                    isTitle
                    tag="h1"
                >
                    {data?.title}
                </Text>
                <Text
                    size="size_m"
                    tag="p"
                >
                    {data?.subtitle}
                </Text>
                <div className={cl.article_info}>
                    <Svg Svg={EyeSvg} />
                    <Text tag="span">{data?.views}</Text>
                </div>
                <div className={cl.article_info}>
                    <Svg Svg={CalendarSvg} />
                    <Text tag="span">{data?.createdAt}</Text>
                </div>
                <section className={cl.article_blocks}>{data?.blocks.map(renderBlock)}</section>
            </article>
        );
    }

    return <div className={cln(cl.article_details, [className])}>{content}</div>;
});
