import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import cl from "./ProfileCard.module.scss";
import { ProfileCardProps } from "./ProfileCard.types";
import { ProfileCardList } from "../ProfileCardList/ProfileCardList";

import { cln, Mods } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";
import { Loader } from "shared/ui/Loader";
import { Avatar } from "shared/ui/Avatar";
import { VStack } from "shared/ui/Stack";

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

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack
                justifyContent="center"
                alignItems="center"
                className={cln(cl.profile_card, [className, cl.loading])}
            >
                <Loader />
            </VStack>
        );
    }

    if (error) {
        return (
            <VStack
                justifyContent="center"
                alignItems="center"
                className={cln(cl.profile_card, [className, cl.error])}
            >
                <Text
                    isTitle
                    Tag="h1"
                    theme="error"
                    
                >
                    {t("There was an error loading the profile")}
                </Text>
                <Text
                    Tag="p"
                    theme="error"
                    
                >
                    {t("Try to reload the page")}
                </Text>
            </VStack>
        );
    }

    const mods: Mods = {
        [cl.editing]: !isReadonly,
    };

    return (
        <VStack
            rowGap="8"
            alignItems="center"
            className={cln(cl.profile_card, [className], mods)}
        >
            {data?.avatar && <Avatar src={data?.avatar} />}
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
        </VStack>
    );
});
