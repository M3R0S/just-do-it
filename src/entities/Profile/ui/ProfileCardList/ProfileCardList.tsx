import { FC, memo, useMemo } from "react";

import cl from "./ProfileCardList.module.scss";
import { ProfileCardListProps } from "./ProfileCardList.types";
import { useDataInputsList } from "./useDataInputsList";
import { ProfileCardItem } from "../ProfileCardItem/ProfileCardItem";

import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { VStack } from "shared/ui/Stack";

export const ProfileCardList: FC<ProfileCardListProps> = memo((props) => {
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
        <VStack
            rowGap="8"
            className={className}
            max
        >
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
        </VStack>
    );
});
