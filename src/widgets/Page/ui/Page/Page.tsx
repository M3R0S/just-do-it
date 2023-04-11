import { FC, UIEvent, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import cl from "./Page.module.scss";
import { PageProps } from "./Page.types";
import { scrollActions } from "../../model/slice/scrollSlice";
import { getScrollByPath } from "../../model/selectors/getScrollSelectors";

import { StateSchema } from "app/providers/Store";
import { cln } from "shared/lib/helpers/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useThrottle } from "shared/lib/hooks/useThrottle";

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useInfiniteScroll<HTMLDivElement, HTMLDivElement>({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            })
        );
    }, 100);

    return (
        <main
            onScroll={onScroll}
            ref={wrapperRef}
            className={cln(cl.page, [className])}
        >
            {children}
            {onScrollEnd && (
                <div
                    className={cl.trigger}
                    ref={triggerRef}
                />
            )}
        </main>
    );
};
