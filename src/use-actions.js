import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions hook that binds all action to redux dispatch, "not actually in use currently"

export const useActions = (actions) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
