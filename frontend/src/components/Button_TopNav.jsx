import { NavLink } from "react-router";
import styles from '../assets/styles/components/Button_TopNav.module.scss';

export default function Button_TopNav({text, path}) {
    return <NavLink className={ styles.Button_TopNav } to={ path } >{ text }</NavLink>;
};