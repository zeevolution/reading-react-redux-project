export const Types = {
  GET_REQUEST: "posts/GET_REQUEST",
  GET_SUCCESS: "posts/GET_SUCCESS"
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
    default:
      return state;
  }
}

export const Creators = {
  getPostsRequest: () => ({ type: Types.GET_REQUEST }),

  getPostsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
