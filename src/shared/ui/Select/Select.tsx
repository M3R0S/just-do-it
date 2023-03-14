import { ChangeEvent, FC, memo, useMemo } from "react";

import cl from "./Select.module.scss";
import { SelectProps } from "./Select.types";

import { cln } from "shared/lib/helpers/classNames";

export const Select: FC<SelectProps> = memo((props) => {
    const { className, label, options, value, onChangeValue, isReadonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeValue?.(e.target.value);
    };

    const optionList = useMemo(
        () =>
            options?.map(({ content, value }) => (
                <option
                    value={value}
                    className={cl.option}
                    key={value}
                >
                    {content}
                </option>
            )),
        [options]
    );

    return (
        <div className={cln(cl.wrapper, [className])}>
            {label && <label className={cl.label}>{`${label} :`}</label>}
            <select
                value={value}
                className={cl.select}
                onChange={onChangeHandler}
                disabled={isReadonly}
            >
                {optionList}
            </select>
        </div>
    );
});
