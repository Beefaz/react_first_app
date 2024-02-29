import '../../styles/navLink.css'

// eslint-disable-next-line react/prop-types
const NavLink = ({href, children}) => {

  return (
    <li className="nav-link">
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavLink;
