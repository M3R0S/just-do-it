import { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";

import cl from "./ButtonError.module.scss";

export const ButtonError: FC = () => {
    const [err, setErr] = useState(false);

    const throwError = () => {
        setErr(true);
    };

    useEffect(() => {
        if (err) {
            throw new Error();
        }
    }, [err]);

    return <Button onClick={throwError}>Вызвать ошибку</Button>;
};
