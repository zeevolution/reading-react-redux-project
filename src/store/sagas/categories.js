import { call, put } from "redux-saga/effects";
import api from "../../utils/api";

import { Creators as CategoriesActions } from "../ducks/categories";

export function* getCategories() {
  try {
    const response = yield call(api.get, "/categories");

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
