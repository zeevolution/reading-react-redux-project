import { all, takeLatest } from "redux-saga/effects";

import { Types as PostsTypes } from "../ducks/posts";

import { getPosts } from "./posts";

export default function* rootSaga() {
  yield all([takeLatest(PostsTypes.GET_REQUEST, getPosts)]);
}
