import { User } from '../model/user';
import { userCardStyles } from './userCard.jss';

interface UserCardProps {
    user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
    const styles = userCardStyles();

    const getGenderIcon = (gender: string) => {
        switch (gender) {
            case 'Male':
                return <i className={`${styles.cardIcon} ${styles.maleIcon}`}>♂</i>;
            case 'Female':
                return <i className={`${styles.cardIcon} ${styles.femaleIcon}`}>♀</i>;
            default:
                return <i className={`${styles.cardIcon} ${styles.otherIcon}`}>⚧</i>;
        }
    };

    return (
        <div className={styles.searchResult}>
            <div className={styles.card}>
                <div className={styles.cardTitle}>{user.name}</div>
                {getGenderIcon(user.gender)}
                <div className={styles.email}> {user.email}</div>
                <div className={styles.ip}>{user.ip_address}</div>
                <div className={styles.car}>{user.car}</div>
            </div>
        </div>
    );
};
