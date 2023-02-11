import { FC } from "react";

import cl from "./{{pascalCase}}.module.scss";
import { {{pascalCase}}Props } from "./{{pascalCase}}.types";

import { cln } from "shared/lib/helpers";

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <div className={cln(cl.{{snakeCase}}, [className, cl[theme]])} {...otherProps}>
            {children}
        </div>
    );
};
