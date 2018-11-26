import { call, put } from "redux-saga/effects";
import api from "../../utils/api";

import { Creators as PostsActions } from "../ducks/posts";

export function* getPosts() {
  try {
    const response = yield call(api.get, "/posts");

    yield put(PostsActions.getPostsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
