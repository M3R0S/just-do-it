import { FC, memo } from "react";

import cl from "./ForbiddenPage.module.scss";

import { Page } from "widgets/Page";

const ForbiddenPage: FC = () => {
    return <Page className={cl.forbidden_page}>У вас нет доступа к этой странице</Page>;
};

export default memo(ForbiddenPage);
