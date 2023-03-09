import axios from "axios";

import { LOCALSTORAGE_USER_KEY } from "shared/constants/localStorage";

export const $axios = axios.create({
    baseURL: __API__,
    headers: {
        // @ts-ignore
        authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY),
    },
});
