import '../styles/logo.css'

// eslint-disable-next-line react/prop-types
const Logo = ({text}) => {
  return (
    <a className="logo" href="#">
      <img src="https://vitejs.dev/logo.svg" alt="vite logo"/>
      {text}
    </a>
  );
}

export default Logo;
