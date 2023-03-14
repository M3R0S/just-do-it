import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cl from "./ValidateErrorProfileCard.module.scss";
import { ValidateErrorProfileCardProps } from "./ValidateErrorProfileCard.types";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "../../model/types/ProfileSchema";

import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";

export const ValidateErrorProfileCard: FC<ValidateErrorProfileCardProps> = memo((props) => {
    const { className } = props;

    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation("profilePage");

    const ValidateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t("Server response error"),
        [ValidateProfileError.NO_DATA]: t("No data available"),
        [ValidateProfileError.INCORRECT_AGE]: t("Incorrect age"),
        [ValidateProfileError.INCORRECT_CITY]: t("Enter the name of the city"),
        [ValidateProfileError.INCORRECT_FIRSTNAME]: t("Enter a name"),
        [ValidateProfileError.INCORRECT_LASTNAME]: t("Enter your last name"),
        [ValidateProfileError.INCORRECT_USERNAME]: t("Enter the user name"),
    };

    return (
        <div className={cln(cl.validate_error_profile_card, [className])}>
            {validateErrors?.length &&
                validateErrors?.map((error) => (
                    <Text
                        key={error}
                        tag="h1"
                        isTitle
                        theme="error"
                    >
                        {ValidateErrorTranslate[error]}
                    </Text>
                ))}
        </div>
    );
});
