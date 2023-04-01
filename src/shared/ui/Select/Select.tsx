import { ChangeEvent, useMemo } from "react";

import cl from "./Select.module.scss";
import { SelectProps } from "./Select.types";

import { cln } from "shared/lib/helpers/classNames";
import { genericMemo } from "shared/lib/helpers/genericMemo";

const Select = <V extends string>(props: SelectProps<V>) => {
    const { className, label, options, value, onChangeValue, isReadonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeValue?.(e.target.value as V);
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
};

export const MemoSelect = genericMemo(Select);
