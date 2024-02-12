/**
 * Paginate an array of elements by page and limit
 * @param array Array of elements to paginate
 * @param page Page to paginate
 * @param limit Limit of elements per page
 * @returns Array of elements paginated
 **/
export const paginateArrayByPage = <T>(array: T[], page: number, limit: number): T[] => {
    return array.slice((page - 1) * limit, page * limit);
};

/**
 * Filter elements of an array that are not in another array
 * @param array Array of elements to filter
 * @param arrayToFilter Array of elements to filter
 * @returns Array of elements filtered
 * */
export const filterArray = <T>(array: T[], arrayToFilter: T[]): T[] => {
    return array.filter((item) => !arrayToFilter.includes(item));
};
