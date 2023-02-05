import { FC } from "react";

import cl from "./ThemeSwitcher.module.scss";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";
import { cln } from "shared/lib/classNames";
import { useTheme } from "shared/lib/hooks/useTheme";
import ThemeSvg from "shared/assets/icons/theme.svg";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className = "", children, ...otherProps } = props;

    const { theme, isLightTheme, toggleTheme } = useTheme();

    const lightTheme = "#ededed";
    const darkTheme = "#0b0b0b";

    return (
        <button
            onClick={toggleTheme}
            className={cln(cl.theme_switcher, [className])}
            {...otherProps}
        >
            <ThemeSvg
                style={{
                    fill: isLightTheme ? lightTheme : darkTheme,
                    transition: "fill 0.5s linear",
                }}
            />
        </button>
    );
};
