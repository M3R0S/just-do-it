import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./HeaderProfileCard.module.scss";
import { getProfileIsCanEdit } from "../../model/selectors/getProfileIsCanEdit/getProfileIsCanEdit";
import { getProfileIsReadonly } from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { HeaderProfileCardProps } from "./HeaderProfileCard.types";

import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";

export const HeaderProfileCard: FC<HeaderProfileCardProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const isReadonly = useSelector(getProfileIsReadonly);
    const isCanEdit = useSelector(getProfileIsCanEdit);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setIsReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cln(cl.header, [className])}>
            <Text
                tag="h1"
                isTitle
                text={t("User profile")}
            />
            {isCanEdit && (
                <div className={cl.wrapper}>
                    {isReadonly ? (
                        <Button
                            className={cl.edit_btn}
                            theme="outline"
                            onClick={onEdit}
                            text={t("Edit")}
                        />
                    ) : (
                        <>
                            <Button
                                className={cl.edit_btn}
                                theme="outline_red"
                                onClick={onCancelEdit}
                                text={t("Cancel")}
                            />
                            <Button
                                className={cl.save_btn}
                                theme="outline"
                                onClick={onSave}
                                text={t("Save")}
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
});
