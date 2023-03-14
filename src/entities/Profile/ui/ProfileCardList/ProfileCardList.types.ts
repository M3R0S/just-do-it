import { Profile } from "../../model/types/Profile";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface ProfileCardListProps extends UseDataInputsListParams {
    className?: string;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export interface UseDataInputsListParams {
    data?: Profile;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    isReadonly?: boolean;
}
