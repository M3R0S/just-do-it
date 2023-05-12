import { FC, memo } from "react";

import cl from "./ThemeSwitcher.module.scss";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";

import ThemeSvg from "shared/assets/svg/theme.svg";
import { cln } from "shared/lib/helpers/classNames";
import { useTheme } from "shared/lib/hooks/useTheme";
import { Button } from "shared/ui/Button";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
    const { className, ...otherProps } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button.NotMemo
            onClick={toggleTheme}
            className={cln(cl.theme_switcher, [className])}
            {...otherProps}
        >
            <ThemeSvg className={cl.svg} />
        </Button.NotMemo>
    );
});
