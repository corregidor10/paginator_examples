import { FC } from 'react';
import { User } from '../model/user';
import { searchResultStyles } from './searchResult.jss';
import { UserCard } from './userCard';
import NoData from './common/noData';

interface SearchResult {
    users: User[];
    searchLaunched: boolean;
}

const SearchResult: FC<SearchResult> = ({ users, searchLaunched }) => {
    const classes = searchResultStyles();

    return (
        <div className={classes.searchResult}>
            {users?.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            {users.length === 0 && searchLaunched && <NoData />}
        </div>
    );
};

export default SearchResult;
