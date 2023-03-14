import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cl from "./HeaderProfileCard.module.scss";
import { HeaderProfileCardProps } from "./HeaderProfileCard.types";
import { getProfileIsReadonly } from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text, TextTag } from "shared/ui/Text";
import { Button, ButtonTheme } from "shared/ui/Button";

export const HeaderProfileCard: FC<HeaderProfileCardProps> = memo((props) => {
    const { className } = props;

    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const isReadonly = useSelector(getProfileIsReadonly);

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
                tag={TextTag.H1}
                isTitle
            >
                {t("User profile")}
            </Text>
            {isReadonly ? (
                <Button
                    className={cl.edit_btn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t("Edit")}
                </Button>
            ) : (
                <>
                    <Button
                        className={cl.edit_btn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                    >
                        {t("Cancel")}
                    </Button>
                    <Button
                        className={cl.save_btn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                    >
                        {t("Save")}
                    </Button>
                </>
            )}
        </div>
    );
});
