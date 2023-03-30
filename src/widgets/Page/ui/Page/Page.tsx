import { FC, UIEvent, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import cl from "./Page.module.scss";
import { PageProps } from "./Page.types";

import { StateSchema } from "app/providers/Store";
import { scrollActions } from "widgets/Page/model/slice/scrollSlice";
import { getScrollByPath } from "widgets/Page/model/selectors/getScrollSelectors";
import { cln } from "shared/lib/helpers/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
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

    useInitialEffect(
        useCallback(() => {
            if (wrapperRef.current) {
                wrapperRef.current.scrollTop = scrollPosition;
            }
        }, [scrollPosition])
    );

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            })
        );
    }, 500);

    return (
        <main
            onScroll={onScroll}
            ref={wrapperRef}
            className={cln(cl.page, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </main>
    );
};
