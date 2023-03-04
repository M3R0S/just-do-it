import { ReactNode } from "react";
import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "../config/StateSchema";

export interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema | DeepPartial<StateSchema>;
}
