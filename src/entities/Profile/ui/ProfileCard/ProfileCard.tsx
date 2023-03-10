import { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./Profile.module.scss";
import { ProfileCardProps } from "./ProfileCard.types";

import { cln } from "shared/lib/helpers/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text, TextTag, TextTheme } from "shared/ui/Text";
import { Loader } from "shared/ui/Loader";

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className, data, error, isLoading } = props;

    const { t } = useTranslation("profilePage");

    const firstnamePlaceholder = t("Your name");
    const lastnamePlaceholder = t("Your last name");

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

    return (
        <div className={cln(cl.profile_card, [className])}>
            <div className={cl.header}>
                <Text
                    tag={TextTag.H1}
                    isTitle
                >
                    {t("User profile")}
                </Text>
                <Button
                    className={cl.edit_btn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t("Edit")}
                </Button>
            </div>
            <div className={cl.data}>
                <div className={cl.data_row}>
                    <Text tag={TextTag.P}>{`${firstnamePlaceholder} :`}</Text>
                    <Input
                        className={cl.data_input}
                        value={data?.firstname}
                        placeholder={firstnamePlaceholder}
                    />
                </div>
                <div className={cl.data_row}>
                    <Text tag={TextTag.P}>{`${lastnamePlaceholder} :`}</Text>
                    <Input
                        className={cl.data_input}
                        value={data?.lastname}
                        placeholder={lastnamePlaceholder}
                    />
                </div>
            </div>
        </div>
    );
};
