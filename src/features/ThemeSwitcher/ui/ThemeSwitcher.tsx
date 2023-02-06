import { FC } from "react";

import cl from "./ThemeSwitcher.module.scss";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";

import { cln } from "shared/lib";
import { useTheme } from "shared/lib/hooks";
import ThemeSvg from "shared/assets/svg/theme.svg";
import { Button } from "shared/ui";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className = "", children, ...otherProps } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={cln(cl.theme_switcher, [className])}
            {...otherProps}
        >
            <ThemeSvg className={cl.svg} />
        </Button>
    );
};