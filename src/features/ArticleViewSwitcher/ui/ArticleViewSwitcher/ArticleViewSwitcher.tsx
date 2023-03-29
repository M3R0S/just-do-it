import { FC, memo } from "react";

import cl from "./ArticleViewSwitcher.module.scss";
import { ArticleViewSwitcherProps } from "./ArticleViewSwitcher.types";
import { viewTypes } from "./ArticleViewSwitcher.const";

import { ArticleView } from "entities/Article";
import { cln } from "shared/lib/helpers/classNames";
import { Svg } from "shared/ui/Svg";
import { Button } from "shared/ui/Button";

export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo((props) => {
    const { className, onViewClick, view } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={cln(cl.article_view_switcher, [className])}>
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
