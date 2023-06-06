import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import cl from "./CountrySelect.module.scss";
import { CountrySelectProps } from "./CountrySelect.types";
import { Country } from "../../model/types/Country";

import { cln } from "shared/lib/helpers/classNames";
import { SelectOptions } from "shared/ui/Select";
import { ListBox } from "shared/ui/ListBox";

const options = Object.entries(Country).map(
    (count): SelectOptions => ({
        value: count[1],
        content: count[1],
    })
);

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const { className, onChangeValue, value, isReadonly } = props;

    const { t } = useTranslation();

    const onChangeValueHandler = useCallback(
        (value: string) => {
            onChangeValue?.(value as Country);
        },
        [onChangeValue]
    );

    return (
        <ListBox
            className={cln(cl.country_select, [className])}
            label={t("Specify the country")}
            options={options}
            value={value}
            defaultValue={t("Select a country")}
            onChangeValue={onChangeValueHandler}
            isReadonly={isReadonly}
            direction="top_right"
        />
    );
});
