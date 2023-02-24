import { FC } from "react";

import cl from "./ThemeSwitcher.module.scss";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";

import { ThemeSvg } from "shared/assets/svg";
import { cln } from "shared/lib/helpers";
import { useTheme } from "shared/lib/hooks";
import { Button } from "shared/ui";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className, ...otherProps } = props;

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
