import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "./post/post.api";


export const store = configureStore({
    reducer: {[postApi.reducerPath]: postApi.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type TypeRootState = ReturnType<typeof store.getState>