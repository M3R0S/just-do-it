import axios from "axios";

import { LOCALSTORAGE_USER_KEY } from "shared/lib/constants/localStorage";

export const $axios = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) ?? "",
    },
});
