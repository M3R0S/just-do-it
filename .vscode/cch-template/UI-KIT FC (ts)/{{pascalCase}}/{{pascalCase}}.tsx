import { FC } from "react";

import cl from './{{pascalCase}}.module.scss'
import { {{pascalCase}}Props } from "./{{pascalCase}}.types";
import { cln } from "shared/lib";

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
    const { className = "", children, ...otherProps } = props;

    return (
        <div className={cln(cl.{{snakeCase}}, [className])} {...otherProps}>
            {children}
        </div>
    );
};