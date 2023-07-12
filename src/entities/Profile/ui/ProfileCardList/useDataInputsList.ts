import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { UseDataInputsListParams } from "./ProfileCardList.types";
import { ProfileCardListItem } from "../ProfileCard/ProfileCard.types";

export const useDataInputsList = (params: UseDataInputsListParams) => {
    const {
        data,
        isReadonly,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
    } = params;

    const { t } = useTranslation();

    const dataInputsList: ProfileCardListItem = useMemo(
        () => [
            {
                id: "1",
                value: data?.firstname,
                onChangeValue: onChangeFirstname,
                placeholder: t("Your name"),
                isReadonly,
                name: "firstname",
            },
            {
                id: "2",
                value: data?.lastname,
                onChangeValue: onChangeLastname,
                placeholder: t("Your last name"),
                isReadonly,
                name: "lastname",
            },
            {
                id: "3",
                value: data?.age,
                onChangeValue: onChangeAge,
                placeholder: t("Your age"),
                isReadonly,
                type: "number",
                name: "age",
            },
            {
                id: "4",
                value: data?.city,
                onChangeValue: onChangeCity,
                placeholder: t("Your city"),
                isReadonly,
                name: "city",
            },
            {
                id: "5",
                value: data?.username,
                onChangeValue: onChangeUsername,
                placeholder: t("Your username"),
                isReadonly,
                name: "username",
            },
            {
                id: "6",
                value: data?.avatar,
                onChangeValue: onChangeAvatar,
                placeholder: t("Your link in avatar"),
                isReadonly,
                name: "avatar",
            },
        ],
        [
            data?.age,
            data?.avatar,
            data?.city,
            data?.firstname,
            data?.lastname,
            data?.username,
            isReadonly,
            onChangeAge,
            onChangeAvatar,
            onChangeCity,
            onChangeFirstname,
            onChangeLastname,
            onChangeUsername,
            t,
        ]
    );
    return { dataInputsList };
};
