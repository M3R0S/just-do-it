import { FC, memo } from "react";

import cl from "./ProfileCardItem.module.scss";
import { ProfileCardItemProps } from "./ProfileCardItem.types";

import { cln } from "shared/lib/helpers/classNames";
import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";

export const ProfileCardItem: FC<ProfileCardItemProps> = memo((props) => {
    const { className, isReadonly, onChangeValue, placeholder, value, type } = props;

    return (
        <div className={cln(cl.row, [className])}>
            <Text tag="p">{`${placeholder} :`}</Text>
            <Input
                type={type}
                className={cl.input}
                value={value}
                placeholder={placeholder}
                onChangeValue={onChangeValue}
                isReadOnly={isReadonly}
            />
        </div>
    );
});
