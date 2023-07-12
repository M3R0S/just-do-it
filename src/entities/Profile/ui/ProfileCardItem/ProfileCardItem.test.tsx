import { screen } from "@testing-library/react";

import { ProfileCardItem } from "./ProfileCardItem";
import { Profile } from "../../model/types/Profile";

import { profileReducer } from "features/EditableProfileCard";
import { RenderWithComponent } from "shared/config/test/RenderWithComponent";

const profile: Profile = {
    id: "1",
    age: "20",
    username: "admin",
    firstname: "admin",
    lastname: "admin",
    city: "msk",
    country: "Russia",
    currency: "RUB",
};

describe("ProfileCardItem", () => {
    test("Render", () => {
        RenderWithComponent(<ProfileCardItem />, {
            initialState: {
                profile: {
                    data: profile,
                    form: profile,
                    isReadonly: true,
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
        expect(screen.getByTestId("ProfileCardItem")).toBeInTheDocument();
    });
});
