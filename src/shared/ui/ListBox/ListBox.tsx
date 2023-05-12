import { Fragment } from "react";
import { Listbox as HListbox } from "@headlessui/react";

import cl from "./ListBox.module.scss";
import { ListBoxProps } from "./ListBox.types";
import { Button } from "../Button";
import { HStack } from "../Stack";

import { cln } from "shared/lib/helpers/classNames";
import { genericMemo } from "shared/lib/helpers/genericMemo";

const ListBox = <V extends string>(props: ListBoxProps<V>) => {
    const {
        className,
        options,
        onChangeValue,
        defaultValue,
        value,
        label,
        isReadonly,
        direction = "bottom",
    } = props;

    return (
        <HStack columnGap="8">
            {label && <label>{`${label} :`}</label>}
            <HListbox
                disabled={isReadonly}
                as="div"
                value={value ?? defaultValue}
                onChange={onChangeValue}
                className={cln(cl.list_box, [className])}
            >
                <HListbox.Button className={cl.trigger}>
                    <Button disabled={isReadonly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={cln(cl.options, [cl[direction]])}>
                    {options?.map((option) => (
                        <HListbox.Option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cln(cl.option, [], {
                                        [cl.active]: active,
                                        [cl.disabled]: option.disabled,
                                    })}
                                >
                                    {selected && "+ "}
                                    {option.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};

export const MemoListBox = genericMemo(ListBox);
