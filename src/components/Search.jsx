import '../styles/search.css';
import magnifier from '../assets/magnifier.svg';

const Search = () => {

  return (
    <div className="search">
      <img src={magnifier} alt="kazkas"/>
      <input type="text" placeholder="Search"></input>
    </div>
  );
}

export default Search;
