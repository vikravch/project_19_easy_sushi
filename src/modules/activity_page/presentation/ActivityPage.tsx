import React, {useEffect} from 'react';
import {loadActivityAction} from "./redux/asyncActions";
import {useAppDispatch, useAppSelector} from "../../../general/redux/hooks";

function ActivityPage() {

    const dispatch = useAppDispatch();
    const activityName = useAppSelector(
        state => state.activity.activity.activityName);

    useEffect(() => {
        dispatch(loadActivityAction());
    }, []);

    return (
        <div>
            <h1>{activityName}</h1>
        </div>
    );
}

export default ActivityPage;