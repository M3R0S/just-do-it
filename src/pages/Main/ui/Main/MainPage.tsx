import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";

import cl from "./MainPage.module.scss";

import { Page } from "widgets/Page";
import { Button } from "shared/ui/Button";

const MainPage: FC = memo(() => {
    const { t } = useTranslation();
    const [state, setState] = useState(0);

    return (
        <Page className={cl.main}>
            <button onClick={() => setState(state + 1)}>Click</button>
            {state}
            <Button>sgfdg</Button>
        </Page>
    );
});

export default MainPage;
