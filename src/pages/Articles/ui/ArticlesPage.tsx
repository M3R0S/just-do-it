import { FC, memo } from "react";

import cl from "./ArticlesPage.module.scss";

const ArticlesPage: FC = () => {
    return <div className={cl.articles_page}>ArticlesPage</div>;
};

export default memo(ArticlesPage);
