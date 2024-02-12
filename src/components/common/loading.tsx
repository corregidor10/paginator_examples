import { useAppSelector } from '../../redux';
import { loaderStyles } from './loading.jss';

export const Loading = () => {
    const styles = loaderStyles();

    const loading = useAppSelector((store) => store.common.loading);

    return (
        <>
            {loading && (
                <div className={styles.loaderContainer}>
                    <div className={styles.loader}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
        </>
    );
};
