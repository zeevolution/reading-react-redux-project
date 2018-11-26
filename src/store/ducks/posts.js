export const Types = {
  GET_REQUEST: "posts/GET_REQUEST",
  GET_SUCCESS: "posts/GET_SUCCESS",
  GET_REQUEST_BY_CATEGORY: "posts/GET_REQUEST_BY_CATEGORY",
  GET_SUCCESS_BY_CATEGORY: "posts/GET_SUCCESS_BY_CATEGORY"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_REQUEST_BY_CATEGORY:
      return { ...state, loading: true };
    case Types.GET_SUCCESS_BY_CATEGORY:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPostsRequest: () => ({ type: Types.GET_REQUEST }),

  getPostsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getPostsRequestByCategory: id => ({
    type: Types.GET_REQUEST_BY_CATEGORY,
    payload: { id }
  }),

  getPostsSuccessByCategory: data => ({
    type: Types.GET_SUCCESS_BY_CATEGORY,
    payload: { data }
  })
};
