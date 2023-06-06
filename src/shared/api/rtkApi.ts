import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { LOCALSTORAGE_USER_KEY } from "shared/lib/constants/localStorage";

export const rtkApi = createApi({
    reducerPath: "rtkApi",
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (header) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? "";

            if (token) {
                header.set("Authorization", token)
            }

            return header
        },
    }),
    endpoints: () => ({}),
});
