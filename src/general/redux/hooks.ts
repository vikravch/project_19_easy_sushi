import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {useEffect} from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    getState: () => RootState
    dispatch: AppDispatch

}>();

export const useOnPageLoad = (handler: () => void) => {
    useEffect(() => {
        const handlePageLoad = (event: any) => {
            handler();
        };

        // Add event listener for the page load event
        window.addEventListener('load', handlePageLoad);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [handler]); // Re-run effect when the handler changes
};

export const useOnPageUnload = (handler: () => void) => {
    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            handler();
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [handler]);
};


