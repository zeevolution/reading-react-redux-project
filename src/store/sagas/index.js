import { all, takeLatest } from "redux-saga/effects";

import { Types as PostsTypes } from "../ducks/posts";
import { Types as CategoriesTypes } from "../ducks/categories";

import { getPosts } from "./posts";
import { getCategories } from "./categories";

export default function* rootSaga() {
  yield all([
    takeLatest(PostsTypes.GET_REQUEST, getPosts),
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories)
  ]);
}
