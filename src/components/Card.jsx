import '../styles/card.css'

// eslint-disable-next-line react/prop-types
const Card = ({title, text}) => {

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}

export default Card;
