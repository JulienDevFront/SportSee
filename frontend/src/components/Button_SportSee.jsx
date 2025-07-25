import styles from '../assets/styles/components/Button_SportSee.module.scss';
import { NavLink } from 'react-router';

export default function Button_SportSee({path, img}) {
    return (
        <NavLink className={ styles.Button_SportSee } to={ path }>
            <img src={img} alt="SportSee Logo" />
            <span>SportSee</span>
        </NavLink>
    );
};