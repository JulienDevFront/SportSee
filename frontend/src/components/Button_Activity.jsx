import styles from '../assets/styles/components/Button_Activity.module.scss';

export default function Button_Activity({ img, alt }) {
    return (
        <button className={styles.Button_Activity}>
            <img src={img} alt={alt} />
        </button>
    );
};