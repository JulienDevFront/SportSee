import styles from '../assets/styles/layouts/Layout_AsideNav.module.scss';
import icon_yoga from '../assets/images/icon_yoga.svg';
import icon_swimming from '../assets/images/icon_swimming.svg';
import icon_biking from '../assets/images/icon_biking.svg';
import icon_bodybuilding from '../assets/images/icon_bodybuilding.svg';
import Button_Activity from '../components/Button_Activity.jsx';

export default function Layout_AsideNav() {
    return (
        <aside className={styles.Layout_AsideNav}> 
            <nav>
                <Button_Activity img={icon_yoga} alt="Icon yoga" />
                <Button_Activity img={icon_swimming} alt="Icon swim" />
                <Button_Activity img={icon_biking} alt="Icon bike" />
                <Button_Activity img={icon_bodybuilding} alt="Icon bodybuilding" />
            </nav>
            <footer>
                <p>Copiryght, SportSee 2020</p>
            </footer>
        </aside>
    );
};