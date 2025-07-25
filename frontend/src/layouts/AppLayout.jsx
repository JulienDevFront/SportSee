import styles from '../assets/styles/layouts/AppLayout.module.scss'
import Layout_AsideNav from './Layout_AsideNav.jsx'
import Layout_TopNav from './Layout_TopNav.jsx'
/**
 * Main layout component for the SportSee application.
 * - - -
 * @component
 * @param {React.ReactNode} children - The child elements to be rendered inside the layout.
 * @returns {JSX.Element} A container wrapping the children.
 */
export default function AppLayout({ children }) {
  return <div className={ styles.AppLayout }>
    <Layout_TopNav />
    <Layout_AsideNav />
    { children }
    </div>
}