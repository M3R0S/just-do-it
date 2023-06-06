import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import cl from "./CurrencySelect.module.scss";
import { CurrencySelectProps } from "./CurrencySelect.types";
import { Currency } from "../../model/types/Currency";

import { cln } from "shared/lib/helpers/classNames";
import { SelectOptions } from "shared/ui/Select";
import { ListBox } from "shared/ui/ListBox";

const options = Object.entries(Currency).map(
    (cur): SelectOptions => ({
        value: cur[1],
        content: cur[1],
    })
);

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const { className, onChangeValue, value, isReadonly } = props;

    const { t } = useTranslation();

    const onChangeValueHandler = useCallback(
        (value: string) => {
            onChangeValue?.(value as Currency);
        },
        [onChangeValue]
    );

    return (
        <ListBox
            className={cln(cl.currency_select, [className])}
            label={t("Specify the currency")}
            options={options}
            value={value}
            defaultValue={t("Choose a currency")}
            onChangeValue={onChangeValueHandler}
            isReadonly={isReadonly}
            direction="top_right"
        />
    );
});
