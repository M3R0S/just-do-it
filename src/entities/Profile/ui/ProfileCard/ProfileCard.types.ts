import { Profile } from "../../model/types/Profile";
import { ProfileCardItemProps } from "../ProfileCardItem/ProfileCardItem.types";

import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    isReadonly?: boolean;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    dataInputsList?: ProfileCardItemList;
}

export interface ProfileCardItemWithId extends ProfileCardItemProps {
    id: string;
}

export type ProfileCardItemList = ProfileCardItemWithId[];
