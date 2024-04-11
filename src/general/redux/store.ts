import {configureStore} from "@reduxjs/toolkit";
import activityReducer from "../../modules/activity_page/presentation/redux/activityReducer";
import logger from 'redux-logger'
import languageSlice from "../../utils/common-redux/languageSlice";


export const store = configureStore({
    reducer: {
        activity: activityReducer,
        language: languageSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;