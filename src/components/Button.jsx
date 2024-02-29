import '../styles/button.css'

// eslint-disable-next-line react/prop-types
const Button = ({children}) => {

  return (
    <button type="button" className="btn">
      {children}
    </button>
  );
}

export default Button;
