import { FC } from "react";

import { VStackProps } from "./VStack.types";
import { Flex } from "../Flex/Flex";

export const VStack: FC<VStackProps> = (props) => {
    return (
        <Flex
            direction="column"
            {...props}
        />
    );
};
