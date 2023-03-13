import { ChangeEvent, FC, memo } from "react";

import cl from "./Input.module.scss";
import { InputProps } from "./Input.types";

import { cln, Mods } from "shared/lib/helpers/classNames";

export const Input: FC<InputProps> = memo((props) => {
    const {
        theme = "clear",
        className,
        value = "",
        type = "text",
        onChangeValue,
        placeholder,
        isAutoFocus,
        inputRef,
        isReadOnly = false,
        ...otherProps
    } = props;

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue?.(e.target.value);
    };

    const mods: Mods = {
        [cl.readonly]: isReadOnly,
    };

    return (
        <input
            value={value}
            type={type}
            className={cln(cl.input, [cl[theme], className], mods)}
            onChange={onChangeValueHandler}
            placeholder={placeholder}
            autoFocus={isAutoFocus}
            ref={inputRef}
            readOnly={isReadOnly}
            {...otherProps}
        />
    );
});
