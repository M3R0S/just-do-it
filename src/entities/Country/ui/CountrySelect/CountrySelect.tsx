import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import cl from "./CountrySelect.module.scss";
import { CountrySelectProps } from "./CountrySelect.types";
import { Country } from "../../model/types/Country";

import { cln } from "shared/lib/helpers/classNames";
import { Select, SelectOptions } from "shared/ui/Select";

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
        <Select
            className={cln(cl.country_select, [className])}
            label={t("Specify the country")}
            options={options}
            value={value}
            onChangeValue={onChangeValueHandler}
            isReadonly={isReadonly}
        />
    );
});
