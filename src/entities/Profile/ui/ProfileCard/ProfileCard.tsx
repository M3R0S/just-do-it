import { FC, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ProfileCard.module.scss";
import { ProfileCardProps } from "./ProfileCard.types";
import { ProfileCardItem } from "../ProfileCardItem/ProfileCardItem";

import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { cln, Mods } from "shared/lib/helpers/classNames";
import { Text, TextTag, TextTheme } from "shared/ui/Text";
import { Loader } from "shared/ui/Loader";
import { Avatar } from "shared/ui/Avatar";

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        data,
        error,
        isLoading,
        isReadonly,
        onChangeCountry,
        onChangeCurrency,
        dataInputsList,
    } = props;

    const { t } = useTranslation("profilePage");

    const dataInputsListItems = useMemo(
        () =>
            dataInputsList?.map((item) => {
                const { id, className, onChangeValue, placeholder, value, type } = item;
                return (
                    <ProfileCardItem
                        key={id}
                        className={className}
                        isReadonly={isReadonly}
                        onChangeValue={onChangeValue}
                        placeholder={placeholder}
                        value={value}
                        type={type}
                    />
                );
            }),
        [dataInputsList, isReadonly]
    );

    if (isLoading) {
        return (
            <div className={cln(cl.profile_card, [className, cl.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cln(cl.profile_card, [className, cl.error])}>
                <Text
                    isTitle
                    tag={TextTag.H1}
                    theme={TextTheme.ERROR}
                >
                    {t("There was an error loading the profile")}
                </Text>
                <Text
                    tag={TextTag.P}
                    theme={TextTheme.ERROR}
                >
                    {t("Try to reload the page")}
                </Text>
            </div>
        );
    }

    const mods: Mods = {
        [cl.editing]: !isReadonly,
    };

    return (
        <div className={cln(cl.profile_card, [className], mods)}>
            {data?.avatar && (
                <Avatar
                    className={cl.avatar}
                    src={data?.avatar}
                />
            )}
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
});
