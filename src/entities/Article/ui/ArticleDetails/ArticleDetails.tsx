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

import { cln } from "shared/lib/helpers/classNames";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text } from "shared/ui/Text";

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
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
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content: JSX.Element;

    if (isLoading) {
        content = <div>Loading</div>;
    } else if (error) {
        content = <Text align="center">{t("An error occurred while loading the article")}</Text>;
    } else {
        content = <div>ARTICLE</div>;
    }

    return <div className={cln(cl.article_details, [className])}>{content}</div>;
});
