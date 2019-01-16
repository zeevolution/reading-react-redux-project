import { call, put } from "redux-saga/effects";
import api from "../../utils/api";

import { Creators as CommentsActions } from "../ducks/comments";

export function* getPostComments(action) {
  try {
    const response = yield call(
      api.get,
      `/posts/${action.payload.id}/comments`
    );

    yield put(CommentsActions.getPostCommentsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
