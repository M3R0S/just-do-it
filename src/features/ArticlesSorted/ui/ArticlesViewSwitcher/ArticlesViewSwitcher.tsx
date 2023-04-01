import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";

import cl from "./ArticlesViewSwitcher.module.scss";
import { ArticlesViewSwitcherProps } from "./ArticlesViewSwitcher.types";
import { viewTypes } from "./ArticlesViewSwitcher.const";
import { articlesSortedActions } from "../../model/slice/articlesSortedSlice";

import { getArticlesSortedView } from "features/ArticlesSorted/model/selectors/articlesSortedSelectors";
import { ArticleView } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Svg } from "shared/ui/Svg";
import { Button } from "shared/ui/Button";

export const ArticlesViewSwitcher: FC<ArticlesViewSwitcherProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesSortedView);

    const onClick = useCallback(
        (view: ArticleView) => () => {
            dispatch(articlesSortedActions.setView(view));
        },
        [dispatch]
    );

    return (
        <div className={cln(cl.articles_view_switcher, [className])}>
            {viewTypes.map((viewTypes) => (
                <Button
                    theme="clear"
                    key={viewTypes.id}
                    onClick={onClick(viewTypes.view)}
                >
                    <Svg
                        Svg={viewTypes.svg}
                        className={cln("", [], { [cl.selected]: viewTypes.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
