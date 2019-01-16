import { all, takeLatest } from "redux-saga/effects";

import { Types as PostsTypes } from "../ducks/posts";
import { Types as CategoriesTypes } from "../ducks/categories";
import { Types as CommentsTypes } from "../ducks/comments";

import { getPosts, getPostsByCategory } from "./posts";
import { getCategories } from "./categories";
import { getPostComments } from "./comments";

export default function* rootSaga() {
  yield all([
    takeLatest(PostsTypes.GET_REQUEST, getPosts),
    takeLatest(PostsTypes.GET_REQUEST_BY_CATEGORY, getPostsByCategory),
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(CommentsTypes.GET_REQUEST, getPostComments)
  ]);
}
