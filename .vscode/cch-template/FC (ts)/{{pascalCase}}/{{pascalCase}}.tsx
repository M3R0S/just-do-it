import { FC, memo } from "react";

import cl from './{{pascalCase}}.module.scss'
import { {{pascalCase}}Props } from "./{{pascalCase}}.types";

import { cln } from "shared/lib/helpers/classNames";

export const {{pascalCase}}: FC<{{pascalCase}}Props> = memo((props) => {
    const { className } = props;

    return (
        <div className={cln(cl.{{snakeCase}}, [className])}>
            
        </div>
    );
});