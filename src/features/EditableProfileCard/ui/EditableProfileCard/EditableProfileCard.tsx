import { FC, memo } from "react";

import { EditableProfileCardProps } from "./EditableProfileCard.types";
import { HeaderProfileCard } from "../HeaderProfileCard/HeaderProfileCard";
import { ValidateErrorProfileCard } from "../ValidateErrorProfileCard/ValidateErrorProfileCard";
import { MainProfileCard } from "../MainProfileCard/MainProfileCard";

import { VStack } from "shared/ui/Stack";

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
    const { className } = props;

    return (
        <VStack
            className={className}
            max
            rowGap="8"
            data-testid="EditableProfileCard"
        >
            <HeaderProfileCard />
            <ValidateErrorProfileCard />
            <MainProfileCard />
        </VStack>
    );
});
