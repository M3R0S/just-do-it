import { FC, memo, useCallback } from "react";

import cl from "./Code.module.scss";
import { CodeProps } from "./Code.types";
import { Button } from "../Button";
import { Svg } from "../Svg";

import CopySvg from "shared/assets/svg/copy.svg";
import { cln } from "shared/lib/helpers/classNames";

export const Code: FC<CodeProps> = memo((props) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={cln(cl.code, [className])}>
            <Button
                className={cl.copy_btn}
                onClick={onCopy}
            >
                <Svg
                    Svg={CopySvg}
                    className={cl.svg}
                />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
