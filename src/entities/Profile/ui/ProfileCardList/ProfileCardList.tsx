import { FC, useMemo } from "react";

import cl from "./ProfileCardList.module.scss";
import { ProfileCardListProps } from "./ProfileCardList.types";
import { useDataInputsList } from "./useDataInputsList";
import { ProfileCardItem } from "../ProfileCardItem/ProfileCardItem";

import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { cln } from "shared/lib/helpers/classNames";

export const ProfileCardList: FC<ProfileCardListProps> = (props) => {
    const {
        className,
        data,
        onChangeCountry,
        onChangeCurrency,
        isReadonly,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
    } = props;

    const { dataInputsList } = useDataInputsList({
        data,
        isReadonly,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
    });

    const dataInputsListItems = useMemo(
        () =>
            dataInputsList?.map((item) => {
                const { id, onChangeValue, placeholder, value, type, isReadonly } = item;
                return (
                    <ProfileCardItem
                        key={id}
                        isReadonly={isReadonly}
                        onChangeValue={onChangeValue}
                        placeholder={placeholder}
                        value={value}
                        type={type}
                    />
                );
            }),
        [dataInputsList]
    );

    return (
        <div className={cln(cl.profile_card_list, [className])}>
            {dataInputsListItems}
            <CurrencySelect
                className={cl.select}
                value={data?.currency}
                onChangeValue={onChangeCurrency}
                isReadonly={isReadonly}
            />
            <CountrySelect
                className={cl.select}
                value={data?.country}
                onChangeValue={onChangeCountry}
                isReadonly={isReadonly}
            />
        </div>
    );
};
