import { FC, memo } from "react";
import { useParams } from "react-router-dom";

import cl from "./ArticleEditPage.module.scss";

import { Page } from "widgets/Page";

const ArticleEditPage: FC = () => {
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <Page className={cl.article_edit_page}>
            {isEdit ? "Редактирование с id " + id : "Создание новой статьи"}
        </Page>
    );
};

export default memo(ArticleEditPage);
