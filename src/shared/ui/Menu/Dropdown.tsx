import { Fragment, memo } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

import cl from "./Dropdown.module.scss";
import { DropdownProps } from "./Dropdown.types";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { cln } from "shared/lib/helpers/classNames";

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = "bottom_left" } = props;
    return (
        <Menu
            as="div"
            className={cln(cl.dropdown, [className])}
        >
            <Menu.Button className={cl.btn}>{trigger}</Menu.Button>
            <Menu.Items className={cln(cl.list, [cl[direction]])}>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        {item.href ? (
                            <Menu.Item
                                disabled={item.isDisabled}
                                key={index}
                                as={Fragment}
                            >
                                {({ active }) => (
                                    <Link
                                        to={item.href ?? PathRoutes.MAIN}
                                        className={cln(cl.item, [], { [cl.active]: active })}
                                    >
                                        {item.content}
                                    </Link>
                                )}
                            </Menu.Item>
                        ) : (
                            <Menu.Item
                                disabled={item.isDisabled}
                                key={index}
                                as={Fragment}
                            >
                                {({ active }) => (
                                    <button
                                        type="button"
                                        onClick={item.onClick}
                                        className={cln(cl.item, [], { [cl.active]: active })}
                                        disabled={item.isDisabled}
                                    >
                                        {item.content}
                                    </button>
                                )}
                            </Menu.Item>
                        )}
                    </Fragment>
                ))}
            </Menu.Items>
        </Menu>
    );
});
