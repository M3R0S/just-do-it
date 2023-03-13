import { Country } from "../../model/types/Country";

export interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChangeValue?: (value: Country) => void;
    isReadonly?: boolean;
}
