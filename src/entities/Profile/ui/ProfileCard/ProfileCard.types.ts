import { HTMLInputTypeAttribute } from "react";

import { Profile } from "../../model/types/Profile";

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
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export interface ProfileCardItem {
    id?: string;
    placeholder?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
    isReadonly?: boolean;
    type?: HTMLInputTypeAttribute;
    name?: string;
}

export type ProfileCardListItem = ProfileCardItem[];
