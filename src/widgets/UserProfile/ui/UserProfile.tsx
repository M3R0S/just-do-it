import { FC, memo, useCallback } from "react";
import { useParams } from "react-router-dom";

import { UserProfileProps } from "./UserProfile.types";

import {
    EditableProfileCard,
    fetchProfileData,
    profileReducer,
} from "features/EditableProfileCard";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicReducerLoader } from "shared/lib/hooks/useDynamicReducerLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

const reducers: ReducersList = {
    profile: profileReducer,
};

export const UserProfile: FC<UserProfileProps> = memo((props) => {
    const { className } = props;

    useDynamicReducerLoader({ reducers: reducers });
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const initialFetchProfileData = useCallback(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    useInitialEffect(initialFetchProfileData);

    return <EditableProfileCard className={className} />;
});
