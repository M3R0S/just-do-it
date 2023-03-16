import { FC, memo } from "react";

import cl from "./ArticleDetailsPage.module.scss";

const ArticleDetailsPage: FC = () => {
    return <div className={cl.article_details_page}>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
