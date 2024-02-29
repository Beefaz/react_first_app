import '../../styles/nav.css'

// eslint-disable-next-line react/prop-types
const NavLink = ({children}) => {

  return (
    <ul className="nav">
      {children}
    </ul>
  );
}

export default NavLink;
