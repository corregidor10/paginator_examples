export interface IUserFilter {
    name: string;
    car: string;
}

export const emptyUserFilter = (): IUserFilter => {
    return {
        car: '',
        name: '',
    };
};
