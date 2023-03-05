import { DeepPartial, PayloadAction } from "@reduxjs/toolkit";

import { loginActions, loginReducer } from "./loginSlice";
import { LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../services";

type DPLoginSchema = DeepPartial<LoginSchema>;

describe("loginSlice", () => {
    test("set username", () => {
        const state: DPLoginSchema = {
            username: "",
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername("user"))
        ).toEqual<DPLoginSchema>({ username: "user" });
    });

    test("set password", () => {
        const state: DPLoginSchema = {
            password: "",
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword("123"))
        ).toEqual<DPLoginSchema>({ password: "123" });
    });

    test("set isLoading pending", () => {
        const state: DPLoginSchema = {
            isLoading: false,
        };

        const action = loginByUsername.pending("", { password: "", username: "" });
        expect(loginReducer(state as LoginSchema, action)).toEqual<DPLoginSchema>({
            isLoading: true,
            error: undefined,
        });
    });

    test("set isLoading fulfilled", () => {
        const state: DPLoginSchema = {
            isLoading: false,
        };

        const action = loginByUsername.fulfilled({ id: "", username: "" }, "", {
            password: "",
            username: "",
        });
        expect(loginReducer(state as LoginSchema, action)).toEqual<DPLoginSchema>({
            isLoading: false,
            error: undefined,
        });
    });

    test("set isLoading rejected / error", () => {
        const state: DPLoginSchema = {
            isLoading: true,
        };

        const action: PayloadAction<string> = {
            type: loginByUsername.rejected.type,
            payload: "403",
        };
        expect(loginReducer(state as LoginSchema, action)).toEqual<DPLoginSchema>({
            isLoading: false,
            error: "403",
        });
    });
});
