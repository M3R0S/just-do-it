import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ProfileCard.module.scss";
import { ProfileCardProps } from "./ProfileCard.types";
import { ProfileCardList } from "../ProfileCardList/ProfileCardList";

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
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
    } = props;

    const { t } = useTranslation("profilePage");

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
            <ProfileCardList
                data={data}
                isReadonly={isReadonly}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
                onChangeAge={onChangeAge}
                onChangeAvatar={onChangeAvatar}
                onChangeCity={onChangeCity}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeUsername={onChangeUsername}
            />
        </div>
    );
});
