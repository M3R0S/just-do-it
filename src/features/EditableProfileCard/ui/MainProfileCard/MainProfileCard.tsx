import { FC, memo } from "react";
import { useSelector } from "react-redux";

import { MainProfileCardProps } from "./MainProfileCard.types";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsReadonly } from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { useDataInputsOnChange } from "./useDataInputsOnChange";
import { useDataSelectsOnChange } from "./useDataSelectsOnChange";

import { ProfileCard } from "entities/Profile";

export const MainProfileCard: FC<MainProfileCardProps> = memo((props) => {
    const { className } = props;

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const isReadonly = useSelector(getProfileIsReadonly);

    const {
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
    } = useDataInputsOnChange();
    const { onChangeCountry, onChangeCurrency } = useDataSelectsOnChange();

    return (
        <ProfileCard
            className={className}
            data={formData}
            error={error}
            isLoading={isLoading}
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
    );
});
