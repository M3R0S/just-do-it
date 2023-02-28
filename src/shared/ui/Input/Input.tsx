import { ChangeEvent, FC, memo } from "react";

import cl from "./Input.module.scss";
import { InputProps } from "./Input.types";

import { cln } from "shared/lib/helpers";

export const Input: FC<InputProps> = memo((props) => {
    const {
        theme = "clear",
        className,
        value,
        type = "text",
        onChangeValue,
        onChange,
        placeholder,
        isAutoFocus,
        inputRef,
        ...otherProps
    } = props;

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange ? onChange : onChangeValue?.(e.target.value);
    };

    return (
        <input
            value={value}
            type={type}
            className={cln(cl.input, [cl[theme], className])}
            onChange={onChangeValueHandler}
            placeholder={placeholder}
            autoFocus={isAutoFocus}
            ref={inputRef}
            {...otherProps}
        />
    );
});
