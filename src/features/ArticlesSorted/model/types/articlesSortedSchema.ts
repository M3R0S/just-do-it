import { ArticleSortField, ArticleView, ArticleType } from "entities/Article";
import { SortOrder } from "shared/lib/types/serverTypes";

export interface ArticlesSortedSchema {
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
