import { useEffect } from "react";
import { useStore } from "react-redux";

import { UseDynamicReducerLoader } from "./useDynamicReducerLoader.types";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";

import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/Store";

export const useDynamicReducerLoader: UseDynamicReducerLoader = (props) => {
    const { reducers, removeAfterUnmount = true } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([reducerKey, reducer]) => {
            const isMounted = mountedReducers[reducerKey as StateSchemaKey];

            if (!isMounted) {
                store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${reducerKey} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey]) => {
                    store.reducerManager.remove(reducerKey as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    }, [dispatch, store.reducerManager, reducers, removeAfterUnmount]);
};
