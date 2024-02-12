export interface IPaginatedFilter<T> {
    page: number;
    limit: number;
    sortField?: string;
    sortDirection?: string;
    filter?: T;
}
