import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cl from "./Profile.module.scss";
import { ProfileCardProps } from "./ProfileCard.types";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";

import { cln } from "shared/lib/helpers/classNames";
import { Title } from "shared/ui/Title";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input, InputTheme } from "shared/ui/Input";
import { Text } from "shared/ui/Text";

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation("profilePage");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const firstnamePlaceholder = t("Your name");
    const lastnamePlaceholder = t("Your last name");

    return (
        <div className={cln(cl.profile_card, [className])}>
            <div className={cl.header}>
                <Title>{t("User profile")}</Title>
                <Button
                    className={cl.edit_btn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t("Edit")}
                </Button>
            </div>
            <div className={cl.data}>
                <div>
                    <Text>{firstnamePlaceholder}</Text>
                    <Input
                        value={data?.firstname}
                        placeholder={firstnamePlaceholder}
                    />
                </div>
                <div>
                    <Text>{lastnamePlaceholder}</Text>
                    <Input
                        value={data?.lastname}
                        placeholder={lastnamePlaceholder}
                    />
                </div>
            </div>
        </div>
    );
};
