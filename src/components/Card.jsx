import '../styles/card.css'

// eslint-disable-next-line react/prop-types
const Card = ({icon, title, text}) => {

  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}

export default Card;
