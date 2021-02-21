import { BlogCreateActionTypes, BlogCreateConstants, BlogFetchActionTypes, blogFetchConstants } from '../action-types';
import { Blog } from '../types/blog';
import { AppThunk } from '../types/app';

import { Dispatch } from "redux";

export const fetchBlogs = (): AppThunk => async (dispatch: Dispatch<BlogFetchActionTypes>) => {
    try {
        dispatch({ type: blogFetchConstants.BLOG_FETCH_REQUEST });

        const blogs = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem("blogs") || "") : [];

        setTimeout(() => {
            dispatch({
                type: blogFetchConstants.BLOG_FETCH_SUCCESS,
                payload: blogs
            });
        }, 2000);
    } catch (err) {
        dispatch({
            type: blogFetchConstants.BLOG_FETCH_ERROR,
            payload: err.message
        })
    }
}

export const createBlog = (blog: Blog): AppThunk => async dispatch => {
    try {
        dispatch({ type: BlogCreateConstants.BLOG_CREATE_REQUEST });

        const blogs = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem("blogs") || "") : [];

        blogs.push(blog);

        localStorage.setItem("blogs", JSON.stringify(blogs));

        setTimeout(() => {
            dispatch({
                type: BlogCreateConstants.BLOG_CREATE_SUCCESS
            });

            dispatch(fetchBlogs());
        }, 2000);
    } catch (err) {
        dispatch({
            type: BlogCreateConstants.BLOG_CREATE_ERROR,
            payload: err.message
        })
    }
}
