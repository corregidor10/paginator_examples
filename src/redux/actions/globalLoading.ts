import { AppThunk } from '..';
import { setGlobalLoading } from '../reducers/common';

export const setGlobalLoadingAction =
    (loading: boolean): AppThunk =>
    (dispatch) => {
        dispatch(setGlobalLoading(loading));
    };
