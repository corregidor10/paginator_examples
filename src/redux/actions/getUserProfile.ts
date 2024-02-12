import { AppThunk } from '..';
import { setGlobalLoading, setUsersData } from '../reducers/common';
import { SearchApi } from '../../api/searchApi';
import { IPaginatedFilter } from '../../model';
import { IUserFilter } from '../../model/userFilter';

const searchApi = new SearchApi();

export const getUsersAction =
    (filter: IPaginatedFilter<string>): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setGlobalLoading(true));
            const users = await searchApi.getUsersAsync(filter);

            dispatch(setUsersData(users));
        } catch (error) {
            window.alert('Error: ' + error);
        } finally {
            dispatch(setGlobalLoading(false));
        }
    };

export const getUsersFilteredAction =
    (filter: IPaginatedFilter<IUserFilter>): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setGlobalLoading(true));
            const users = await searchApi.getUsersFilteredAsync(filter);

            dispatch(setUsersData(users));
        } catch (error) {
            window.alert('Error: ' + error);
        } finally {
            dispatch(setGlobalLoading(false));
        }
    };
