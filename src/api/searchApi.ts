import { mockedApiCall, mockedApiCallFiltered } from '../mock/mockApi';
import { IPaginatedFilter, IPaginatedResponse } from '../model';
import { User } from '../model/user';
import { IUserFilter } from '../model/userFilter';

export class SearchApi {
    async getUsersAsync(filter: IPaginatedFilter<string>): Promise<IPaginatedResponse<User>> {
        // const url = `${baseURL}?name=${filter}`;
        // await axios.get(url).then((response) => {
        //     return response.data;
        // });
        return await mockedApiCall(filter);
    }
    async getUsersFilteredAsync(filter: IPaginatedFilter<IUserFilter>): Promise<IPaginatedResponse<User>> {
        // const url = `${baseURL}?name=${filter}`;
        // await axios.get(url).then((response) => {
        //     return response.data;
        // });
        return await mockedApiCallFiltered(filter);
    }
}
