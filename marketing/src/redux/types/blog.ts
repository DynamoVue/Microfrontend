export type Blog = {
    author: string;
    title: string;
}

export type BlogCreateState = {
    loading: boolean;
    error?: string | undefined;
}

export type BlogFetchState = {
    data?: Blog[],
    loading: boolean;
    error?: string | undefined;
}