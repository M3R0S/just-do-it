import { FC, memo } from "react";

import cl from "./EditableProfileCard.module.scss";
import { EditableProfileCardProps } from "./EditableProfileCard.types";
import { HeaderProfileCard } from "./HeaderProfileCard/HeaderProfileCard";
import { MainProfileCard } from "./MainProfileCard/MainProfileCard";
import { ValidateErrorProfileCard } from "./ValidateErrorProfileCard/ValidateErrorProfileCard";

import { cln } from "shared/lib/helpers/classNames";

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={cln(cl.wrapper, [className])}>
            <HeaderProfileCard />
            <ValidateErrorProfileCard />
            <MainProfileCard />
        </div>
    );
});
