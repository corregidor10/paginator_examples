import { IPaginatedFilter, IPaginatedResponse } from '../model';
import { User } from '../model/user';
import { IUserFilter } from '../model/userFilter';

export const mockedApiCall = (filter: IPaginatedFilter<string>): Promise<IPaginatedResponse<User>> => {
    return new Promise<IPaginatedResponse<User>>((resolve) => {
        setTimeout(() => {
            import('../mock/mockData.json').then((data: { default: User[] }) => {
                const filteredData = data.default.filter((user: User) => user.name.toLowerCase().includes(filter.filter!.toLowerCase()));

                const paginatedData = filteredData.slice((filter.page - 1) * filter.limit, filter.page * filter.limit);
                const paginatedResponse: IPaginatedResponse<User> = {
                    data: paginatedData,
                    totalCount: filteredData.length,
                    limit: filter.limit,
                    page: filter.page,
                    offset: filter.limit * (filter.page - 1),
                };

                resolve(paginatedResponse);
            });
        }, 300);
    });
};

export const mockedApiCallFiltered = (filter: IPaginatedFilter<IUserFilter>): Promise<IPaginatedResponse<User>> => {
    return new Promise<IPaginatedResponse<User>>((resolve) => {
        setTimeout(() => {
            import('../mock/mockData.json').then((data: { default: User[] }) => {
                const filteredData = data.default.filter((user: User) => {
                    const nameMatches = !filter.filter!.name || user.name.toLowerCase().includes(filter.filter!.name.toLowerCase());
                    const carMatches = !filter.filter!.car || user.car.toLowerCase().includes(filter.filter!.car.toLowerCase());
                    return nameMatches && carMatches;
                });

                const paginatedData = filteredData.slice((filter.page - 1) * filter.limit, filter.page * filter.limit);
                const paginatedResponse: IPaginatedResponse<User> = {
                    data: paginatedData,
                    totalCount: filteredData.length,
                    limit: filter.limit,
                    page: filter.page,
                    offset: filter.limit * (filter.page - 1),
                };

                resolve(paginatedResponse);
            });
        }, 300);
    });
};
