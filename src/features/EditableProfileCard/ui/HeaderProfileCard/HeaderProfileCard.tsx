import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getProfileIsCanEdit } from "../../model/selectors/getProfileIsCanEdit/getProfileIsCanEdit";
import { getProfileIsReadonly } from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { HeaderProfileCardProps } from "./HeaderProfileCard.types";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { HStack } from "shared/ui/Stack";

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
        <HStack
            justifyContent="space_between"
            className={className}
        >
            <Text
                tag="h1"
                isTitle
                text={t("User profile")}
            />
            {isCanEdit && (
                <>
                    {isReadonly ? (
                        <Button
                            theme="outline"
                            onClick={onEdit}
                            text={t("Edit")}
                        />
                    ) : (
                        <HStack columnGap="16">
                            <Button
                                theme="outline_red"
                                onClick={onCancelEdit}
                                text={t("Cancel")}
                            />
                            <Button
                                theme="outline"
                                onClick={onSave}
                                text={t("Save")}
                            />
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
});
