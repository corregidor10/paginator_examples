export interface IPaginatedResponse<T> {
    page: number;
    limit: number;
    totalCount: number;
    totalPages?: number;
    data: T[];
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    offset: number;
}

export const emptyPaginatedResponse = <T>(): IPaginatedResponse<T> => {
    return {
        page: DEFAULT_PAGE,
        limit: DEFAULT_LIMIT,
        totalCount: 0,
        totalPages: 0,
        offset: 0,
        data: [],
        hasNextPage: false,
        hasPreviousPage: false,
    };
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 20;
