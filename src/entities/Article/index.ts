export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export { ArticleList } from "./ui/ArticleList/ArticleList";

export { articleDetailsActions, articleDetailsReducer } from "./model/slice/articleDetailsSlice";

export type { Article, ArticleView, ArticleSortField, ArticleType } from "./model/types/article";
export type { ArticleDetailsSchema } from "./model/types/ArticleDetailsSchema";

export { getArticleDetailsData } from "./model/selectors/articleDetails";
