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

export function* getPostsByCategory(action) {
  try {
    const response = yield call(api.get, `${action.payload.id}/posts`);

    yield put(PostsActions.getPostsSuccessByCategory(response.data));
  } catch (err) {
    console.log(err);
  }
}
