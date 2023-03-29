import { FC, memo } from "react";

import cl from "./ArticlesPage.module.scss";

import { ArticlesDisplay } from "widgets/ArticlesDisplay";

const ArticlesPage: FC = () => {
    return (
        <div className={cl.articles_page}>
            <ArticlesDisplay />
        </div>
    );
};

export default memo(ArticlesPage);
