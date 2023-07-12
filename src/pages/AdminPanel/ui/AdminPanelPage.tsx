import { FC, memo } from "react";

import cl from "./AdminPanelPage.module.scss";

import { Page } from "widgets/Page";

const AdminPanelPage: FC = () => {
    return <Page className={cl.admin_panel_page}>Admin Page</Page>;
};

export default memo(AdminPanelPage);
