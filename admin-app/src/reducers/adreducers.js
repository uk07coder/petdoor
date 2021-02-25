import { adConstants } from "../actions/constants";
const initstate = {
  error: null,
  message: "",
  loading: false,
};

export default (state = initstate, action) => {
  switch (action.type) {
    case adConstants.AD_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case adConstants.AD_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case adConstants.AD_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload.error,
      };
      break;
  }
  return state;
};
