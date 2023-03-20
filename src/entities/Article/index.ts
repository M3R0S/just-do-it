export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export { articleDetailsActions, articleDetailsReducer } from "./model/slice/articleDetailsSlice";

export type { Article } from "./model/types/article";
export type { ArticleDetailsSchema } from "./model/types/ArticleDetailsSchema";

export { getArticleDetailsData } from "./model/selectors/articleDetails";
