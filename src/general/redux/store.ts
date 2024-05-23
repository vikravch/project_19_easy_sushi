import {configureStore} from "@reduxjs/toolkit";
import activityReducer from "../../modules/activity_page/presentation/redux/activityReducer";
import logger from 'redux-logger'
import languageSlice from "../../utils/common-redux/languageSlice";
import orderSlice from "../../modules/nav_cart/presentation/cart_bar/redux/orderSlice";


export const store = configureStore({
    reducer: {
        activity: activityReducer,
        language: languageSlice,
        order: orderSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;