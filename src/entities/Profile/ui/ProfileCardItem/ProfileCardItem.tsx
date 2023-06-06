import { FC, memo } from "react";

import cl from "./ProfileCardItem.module.scss";
import { ProfileCardItemProps } from "./ProfileCardItem.types";

import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";
import { HStack } from "shared/ui/Stack";

export const ProfileCardItem: FC<ProfileCardItemProps> = memo((props) => {
    const { className, isReadonly, onChangeValue, placeholder, value, type } = props;

    return (
        <HStack
            columnGap="8"
            className={className}
        >
            <Text Tag="p">{`${placeholder} :`}</Text>
            <Input
                type={type}
                className={cl.input}
                value={value}
                placeholder={placeholder}
                onChangeValue={onChangeValue}
                isReadOnly={isReadonly}
            />
        </HStack>
    );
});
