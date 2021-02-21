import { Blog } from '../types/blog';

export enum BlogCreateConstants {
    BLOG_CREATE_REQUEST = 'BLOG_CREATE_REQUEST',
    BLOG_CREATE_SUCCESS = 'BLOG_CREATE_SUCCESS',
    BLOG_CREATE_ERROR = 'BLOG_CREATE_ERROR'
}

export enum blogFetchConstants {
    BLOG_FETCH_REQUEST = 'BLOG_FETCH_REQUEST',
    BLOG_FETCH_SUCCESS = 'BLOG_FETCH_SUCCESS',
    BLOG_FETCH_ERROR = 'BLOG_FETCH_ERROR'
}

type BlogCreateRequestAction = {
    type: BlogCreateConstants.BLOG_CREATE_REQUEST
}

type BlogCreateSuccessAction = {
    type: BlogCreateConstants.BLOG_CREATE_SUCCESS,
}

type BlogCreateErrorAction = {
    type: BlogCreateConstants.BLOG_CREATE_ERROR,
    payload: string;
}

type BlogFetchRequestAction = {
    type: blogFetchConstants.BLOG_FETCH_REQUEST
}

type BlogFetchSuccessAction = {
    type: blogFetchConstants.BLOG_FETCH_SUCCESS,
    payload: Blog[]
}

type BlogFetchErrorAction = {
    type: blogFetchConstants.BLOG_FETCH_ERROR,
    payload: string
}

export type BlogCreateActionTypes = 
    | BlogCreateRequestAction
    | BlogCreateSuccessAction
    | BlogCreateErrorAction;

export type BlogFetchActionTypes = 
    | BlogFetchRequestAction
    | BlogFetchSuccessAction
    | BlogFetchErrorAction;