import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/Store";
import { articleRecommendationsListReducer } from "widgets/ArticleRecomendationsList";
import { articlesDisplayReducer } from "widgets/ArticlesDisplay";
import { scrollReducer } from "widgets/Page";
import { articleDetailsCommentsReducer } from "widgets/CommentsForArticle";
import { loginReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { addNewCommentReducer } from "features/AddNewComment";
import { articlesSortedReducer } from "features/ArticlesSorted";
import { articleDetailsReducer } from "entities/Article";
import { userReducer } from "entities/User";
import { ReducersList } from "shared/lib/hooks/useDynamicReducerLoader";

export const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articleRecommendationsList: articleRecommendationsListReducer,
    articlesDisplay: articlesDisplayReducer,
    articlesSorted: articlesSortedReducer,
    scroll: scrollReducer,
    user: userReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: Story) =>
        (
            <StoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
