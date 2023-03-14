import { useCallback } from "react";

import { profileActions } from "../../model/slice/profileSlice";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

export const useDataSelectsOnChange = () => {
    const dispatch = useAppDispatch();

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

    return { onChangeCurrency, onChangeCountry };
};
