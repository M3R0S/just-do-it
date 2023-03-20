import { FC, lazy } from "react";

import { AddNewCommentProps } from "./AddNewComment.types";

export const AddNewCommentLazy = lazy<FC<AddNewCommentProps>>(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./AddNewComment")), 1500);
        })
);
