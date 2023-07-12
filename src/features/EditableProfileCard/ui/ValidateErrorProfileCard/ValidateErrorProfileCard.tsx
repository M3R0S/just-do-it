import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ValidateErrorProfileCardProps } from "./ValidateErrorProfileCard.types";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "../../model/types/ProfileSchema";

import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack";

export const ValidateErrorProfileCard = memo((props: ValidateErrorProfileCardProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const validateErrors = useSelector(getProfileValidateErrors);

    const ValidateErrorTranslate = useMemo(
        () => ({
            [ValidateProfileError.SERVER_ERROR]: t("Server response error"),
            [ValidateProfileError.NO_DATA]: t("No data available"),
            [ValidateProfileError.INCORRECT_AGE]: t("Incorrect age"),
            [ValidateProfileError.INCORRECT_CITY]: t("Enter the name of the city"),
            [ValidateProfileError.INCORRECT_FIRSTNAME]: t("Enter a name"),
            [ValidateProfileError.INCORRECT_LASTNAME]: t("Enter your last name"),
            [ValidateProfileError.INCORRECT_USERNAME]: t("Enter the user name"),
        }),
        [t]
    );

    return (
        <VStack className={className}>
            {validateErrors?.length &&
                validateErrors?.map((error) => (
                    <Text
                        key={error}
                        Tag="h1"
                        isTitle
                        theme="error"
                        data-testid="ValidateErrorProfileCard.errorText"
                    >
                        {ValidateErrorTranslate[error]}
                    </Text>
                ))}
        </VStack>
    );
});
