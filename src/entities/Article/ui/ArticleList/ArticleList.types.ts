import { Article, ArticleView } from "../../model/types/article";

export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}
