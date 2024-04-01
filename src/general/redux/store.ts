import {configureStore} from "@reduxjs/toolkit";
import activityReducer from "../../modules/activity_page/presentation/redux/activityReducer";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        activity: activityReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;