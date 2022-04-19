import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Root} from "./post.types";
import {GetNewsQuery} from "./post.query";


export const postApi = createApi({
    reducerPath: 'api/news',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://news.itmo.ru/api/news/list/'}),
    endpoints: build => ({
        getNews: build.query<Root, GetNewsQuery>({
            query: (query) => `?ver=${query.ver}.0&per_page=${query.per_page}`,
        }),
    }),
})

export const {useGetNewsQuery} = postApi
