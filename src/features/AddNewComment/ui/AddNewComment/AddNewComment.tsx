import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./AddNewComment.module.scss";
import { AddNewCommentProps } from "./AddNewComment.types";
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from "../../model/selectors/addNewCommentSelectors";
import { addNewCommentActions, addNewCommentReducer } from "../../model/slice/addNewCommentSlice";

import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useDynamicReducerLoader, ReducersList } from "shared/lib/hooks/useDynamicReducerLoader";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewComment: FC<AddNewCommentProps> = (props) => {
    const { className, onSendComment } = props;

    useDynamicReducerLoader({ reducers });
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onChangeTextComment = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text);
        onChangeTextComment("");
    }, [onChangeTextComment, onSendComment, text]);

    return (
        <div className={cln(cl.add_new_comment, [className])}>
            <Input
                className={cl.input}
                onChangeValue={onChangeTextComment}
                value={text}
                placeholder={t("Enter the comment text")}
            />
            <Button
                onClick={onSendHandler}
                theme="outline"
                text={t("Send")}
            />
        </div>
    );
};

export default memo(AddNewComment);
