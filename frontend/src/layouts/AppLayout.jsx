/**
 * Main layout component for the SportSee application.
 * - - -
 * @component
 * @param {React.ReactNode} children - The child elements to be rendered inside the layout.
 * @returns {JSX.Element} A container wrapping the children.
 */
export default function AppLayout({ children }) {
  return <div className="AppLayout">{children}</div>
}