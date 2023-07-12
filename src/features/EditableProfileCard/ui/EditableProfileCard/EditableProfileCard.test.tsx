import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { EditableProfileCard } from "./EditableProfileCard";
import { profileReducer } from "../../model/slice/profileSlice";

import { Profile } from "entities/Profile";
import { RenderWithComponent } from "shared/config/test/RenderWithComponent";
import { $axios } from "shared/api/axios";

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

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            isReadonly: true,
        },
        user: {
            authData: {
                id: "1",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe("EditableProfileCard", () => {
    beforeEach(() => {
        RenderWithComponent(<EditableProfileCard />, options);
    });

    test("Переключение режима readonly", async () => {
        await userEvent.click(screen.getByTestId("HeaderProfileCard.editButton"));
        expect(screen.getByTestId("HeaderProfileCard.cancelEditButton")).toBeInTheDocument();
    });

    test("При отмене происходит обнуление", async () => {
        await userEvent.click(screen.getByTestId("HeaderProfileCard.editButton"));

        await userEvent.clear(screen.getByTestId("ProfileCardItem.firstname"));
        await userEvent.clear(screen.getByTestId("ProfileCardItem.lastname"));

        await userEvent.type(screen.getByTestId("ProfileCardItem.lastname"), "user");
        await userEvent.type(screen.getByTestId("ProfileCardItem.firstname"), "user");

        expect(screen.getByTestId("ProfileCardItem.firstname")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCardItem.lastname")).toHaveValue("user");

        await userEvent.click(screen.getByTestId("HeaderProfileCard.cancelEditButton"));

        await userEvent.type(screen.getByTestId("ProfileCardItem.lastname"), "admin");
        await userEvent.type(screen.getByTestId("ProfileCardItem.firstname"), "admin");
    });

    test("Появление ошибки", async () => {
        await userEvent.click(screen.getByTestId("HeaderProfileCard.editButton"));

        await userEvent.clear(screen.getByTestId("ProfileCardItem.firstname"));

        await userEvent.click(screen.getByTestId("HeaderProfileCard.saveButton"));

        expect(screen.getByTestId("ValidateErrorProfileCard.errorText")).toBeInTheDocument();
    });

    test("Запрос на изменение ушел на сервер", async () => {
        const mockPutReq = jest.spyOn($axios, "put");

        await userEvent.click(screen.getByTestId("HeaderProfileCard.editButton"));

        await userEvent.clear(screen.getByTestId("ProfileCardItem.firstname"));

        await userEvent.type(screen.getByTestId("ProfileCardItem.firstname"), "user");

        await userEvent.click(screen.getByTestId("HeaderProfileCard.saveButton"));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
