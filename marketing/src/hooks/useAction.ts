import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { createBlog, fetchBlogs } from "../redux";

const actionCreators = {
    createBlog,
    fetchBlogs
}

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, actionCreators), dispatch);
};
