import { FC, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cl from "./MainProfileCard.module.scss";
import { MainProfileCardProps } from "./MainProfileCard.types";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsReadonly } from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { profileActions } from "../../model/slice/profileSlice";

import { ProfileCard, ProfileCardItemList } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export const MainProfileCard: FC<MainProfileCardProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const isReadonly = useSelector(getProfileIsReadonly);

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ firstname: value }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ age: value }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    const dataInputsList: ProfileCardItemList = useMemo(
        () => [
            {
                id: "1",
                value: formData?.firstname,
                onChangeValue: onChangeFirstname,
                placeholder: t("Your name"),
            },
            {
                id: "2",
                value: formData?.lastname,
                onChangeValue: onChangeLastname,
                placeholder: t("Your last name"),
            },
            {
                id: "3",
                value: formData?.age,
                onChangeValue: onChangeAge,
                placeholder: t("Your age"),
                type: "number",
            },
            {
                id: "4",
                value: formData?.city,
                onChangeValue: onChangeCity,
                placeholder: t("Your city"),
            },
            {
                id: "5",
                value: formData?.username,
                onChangeValue: onChangeUsername,
                placeholder: t("Your username"),
            },
            {
                id: "6",
                value: formData?.avatar,
                onChangeValue: onChangeAvatar,
                placeholder: t("Your link in avatar"),
            },
        ],
        [
            formData?.age,
            formData?.avatar,
            formData?.city,
            formData?.firstname,
            formData?.lastname,
            formData?.username,
            onChangeAge,
            onChangeAvatar,
            onChangeCity,
            onChangeFirstname,
            onChangeLastname,
            onChangeUsername,
            t,
        ]
    );

    return (
        <div className={cln(cl.main, [className])}>
            <ProfileCard
                data={formData}
                dataInputsList={dataInputsList}
                error={error}
                isLoading={isLoading}
                isReadonly={isReadonly}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};
