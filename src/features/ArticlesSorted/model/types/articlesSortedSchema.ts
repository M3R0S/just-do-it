import { ArticleSortField, ArticleView } from "entities/Article";
import { SortOrder } from "shared/lib/types/serverTypes";

export interface ArticlesSortedSchema {
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
}
