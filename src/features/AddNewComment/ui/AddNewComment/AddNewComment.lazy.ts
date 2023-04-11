import { FC, lazy } from "react";

import { AddNewCommentProps } from "./AddNewComment.types";

export const AddNewCommentLazy = lazy<FC<AddNewCommentProps>>(() => import("./AddNewComment"));
