import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ArticleDetailsDisplayHeader.module.scss";
import { ArticleDetailsDisplayHeaderProps } from "./ArticleDetailsDisplayHeader.types";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";
import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";

export const ArticleDetailsDisplayHeader: FC<ArticleDetailsDisplayHeaderProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation("articlePage");

    return (
        <div className={cln(cl.article_details_display_header, [className])}>
            <AppLink
                theme="outline"
                to={PathRoutes.ARTICLES}
            >
                {t("Back to the list")}
            </AppLink>
            <Button theme="outline">{t("Edit")}</Button>
        </div>
    );
});
