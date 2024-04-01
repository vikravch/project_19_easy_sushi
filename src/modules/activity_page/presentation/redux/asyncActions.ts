import {createAsyncThunk} from "@reduxjs/toolkit";
import Activity from "../../domain/Activity";

export const loadActivityAction = createAsyncThunk<Activity>(
    'action/getAction',
    async (_, thunkAPI) => {
        try{
            const response = await fetch('https://www.boredapi.com/api/activity/');
            const data = await response.json();
            return new Activity(data.activity);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)