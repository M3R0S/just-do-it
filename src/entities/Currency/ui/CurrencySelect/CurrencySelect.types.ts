import { Currency } from "../../model/types/Currency";

export interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChangeValue?: (value: Currency) => void;
    isReadonly?: boolean;
}
