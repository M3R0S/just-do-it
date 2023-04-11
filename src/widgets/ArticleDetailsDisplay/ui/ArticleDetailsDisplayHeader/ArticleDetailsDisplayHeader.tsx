import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import cl from "./ArticleDetailsDisplayHeader.module.scss";
import { ArticleDetailsDisplayHeaderProps } from "./ArticleDetailsDisplayHeader.types";
import { getCanEditArticle } from "../../model/selectors/articleDetailsDisplaySelectors";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { AppLink } from "shared/ui/AppLink";

export const ArticleDetailsDisplayHeader: FC<ArticleDetailsDisplayHeaderProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation("articlePage");
    const { id } = useParams();

    const isCanEdit = useSelector(getCanEditArticle);

    return (
        <div className={cln(cl.article_details_display_header, [className])}>
            <AppLink
                theme="outline"
                to={PathRoutes.ARTICLES}
                text={t("Back to the list")}
            />
            {isCanEdit && (
                <AppLink
                    to={id ? `${PathRoutes.ARTICLE_DETAILS}${id}/edit` : PathRoutes.NOT_FOUND}
                    theme="outline"
                    text={t("Edit")}
                />
            )}
        </div>
    );
});
