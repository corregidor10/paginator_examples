import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emptyPaginatedResponse, IPaginatedResponse, User } from '../../model';

interface CommonState {
    loading: boolean;
    users: IPaginatedResponse<User>;
}

const initialState: CommonState = {
    loading: false,
    users: emptyPaginatedResponse<User>(),
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setUsersData: (state, action: PayloadAction<IPaginatedResponse<User>>) => {
            state.users = action.payload;
        },
        resetUsersInitialState: (state) => {
            state.users = initialState.users;
        },
    },
});

export const { setGlobalLoading, setUsersData, resetUsersInitialState } = commonSlice.actions;

export default commonSlice.reducer;
