import { User } from "entities/User";

export type ArticleSortField = "views" | "title" | "createdAt";

export type ArticleBlockType = "IMAGE" | "TEXT" | "CODE";

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: "CODE";
    code: string;
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: "IMAGE";
    src: string;
    title: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: "TEXT";
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText;

export type ArticleType = "ALL" | "IT" | "SCIENCE" | "ECONOMICS";

export type ArticleView = "list" | "tile";

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: string;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}
