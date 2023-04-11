import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./LangSwitcher.module.scss";
import { LangSwitcherProps } from "./LangSwitcher.types";

import { Lang } from "shared/config/i18n/lang";
import { cln } from "shared/lib/helpers/classNames";
import { Button } from "shared/ui/Button";

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const isRuLang = i18n.language === Lang.RU;

    const changeLang = async () => {
        const actualLang = isRuLang ? Lang.EN : Lang.RU;

        await i18n.changeLanguage(actualLang);
    };

    return (
        <Button
            onClick={changeLang}
            className={cln(cl.lang_switcher, [className])}
            text={short ? t("Lang") : t("Language")}
        />
    );
});
