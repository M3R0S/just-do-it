import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { ReducerListEntries, UseDynamicReducerLoader } from "./useDynamicReducerLoader.types";

import { ReduxStoreWithManager } from "app/providers/Store";

export const useDynamicReducerLoader: UseDynamicReducerLoader = (props) => {
    const { reducers, removeAfterUnmount = true } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducerListEntries) => {
            store.reducerManager.add(reducerKey, reducer);
            dispatch({ type: `@INIT ${reducerKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey]: ReducerListEntries) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    }, [dispatch, store.reducerManager, reducers, removeAfterUnmount]);
};
