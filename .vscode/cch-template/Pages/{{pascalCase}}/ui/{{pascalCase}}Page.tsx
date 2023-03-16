import { FC, memo } from "react";

import cl from './{{pascalCase}}Page.module.scss'

const {{pascalCase}}Page: FC = () => {
    return (
        <div className={cl.{{snakeCase}}_page}>
            
        </div>
    );
};

export default memo({{pascalCase}}Page)
