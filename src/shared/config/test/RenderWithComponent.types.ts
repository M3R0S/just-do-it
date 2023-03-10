import { StateSchema } from "app/providers/Store";

export interface RenderWithComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}
