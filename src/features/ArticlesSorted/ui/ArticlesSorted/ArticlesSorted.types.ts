import { Article } from "entities/Article";

export interface ArticlesSortedProps {
    className?: string;
    articles: Article[];
    isLoading: boolean;
    requestUpdate: VoidFunction;
    returnToFirstPage: VoidFunction;
}
