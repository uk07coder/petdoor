import { adConstants } from "./constants";
import axiosInstance from "../helpers/axios";

export const adposting = (adcon) => {
  console.log(adcon);
  return async (dispatch) => {
    dispatch({ type: adConstants.AD_POST_REQUEST });
    const res = await axiosInstance.post("/ad/create", adcon, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: adConstants.AD_POST_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: adConstants.AD_POST_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
