import {createSlice} from "@reduxjs/toolkit";
import Activity from "../../domain/Activity";
import {loadActivityAction} from "./asyncActions";

const activitySlice = createSlice(
    {
        name: 'activity',
        initialState: {
            activity: new Activity().toObj(),
            isLoading: false,
            error: ''
        },
        reducers: {},
        extraReducers: (builder) =>{
            builder.addCase(
                loadActivityAction.pending,
                (state)=>{
                    state.isLoading = true;
            }).addCase(
                loadActivityAction.rejected,
                (state, action) => {
                    state.error = action.error.message || 'Server error';
                    state.isLoading = false;
                }
            ).addCase(
                loadActivityAction.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.error = '';
                    state.activity = action.payload.toObj();
                }
            )
        }
    }
);

export default activitySlice.reducer;