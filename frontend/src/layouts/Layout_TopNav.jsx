import styles from '../assets/styles/layouts/Layout_TopNav.module.scss';
import icon_SportSee from '../assets/images/icon_SportSee.svg';
import Button_SportSee from '../components/Button_SportSee.jsx';
import Button_TopNav from '../components/Button_TopNav.jsx';

export default function Layout_TopNav() {
  return (
    <nav className={styles.Layout_TopNav}>
        <Button_SportSee path="#" img={ icon_SportSee }/>
        <Button_TopNav text="Accueil" path="#" />
        <Button_TopNav text="Profil" path="#" />
        <Button_TopNav text="Réglage" path="#" />
        <Button_TopNav text="Communauté" path="#" />
    </nav>
  );
};