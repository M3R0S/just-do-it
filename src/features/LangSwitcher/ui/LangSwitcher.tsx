import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./LangSwitcher.module.scss";
import { LangSwitcherProps } from "./LangSwitcher.types";

import { cln } from "shared/lib";
import { Lang } from "shared/config/lang";
import { Button } from "shared/ui";

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;

    const { i18n } = useTranslation();

    const isRuLang = i18n.language === Lang.RU;

    const changeLang = async () => {
        const actualLang = isRuLang ? Lang.EN : Lang.RU;

        await i18n.changeLanguage(actualLang);
    };

    return (
        <Button
            onClick={changeLang}
            className={cln(cl.lang_switcher, [className])}
        >
            {isRuLang ? "English" : "Русский"}
        </Button>
    );
};
