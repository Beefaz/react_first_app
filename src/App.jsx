import './App.css'
import Logo from "./components/Logo.jsx";
import Header from "./components/navigation/Header.jsx";
import Search from "./components/Search.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/navigation/Nav.jsx";
import NavLink from "./components/navigation/NavLink.jsx";
import {routes, cards, buttons} from "./constants/constants.js";
import Section from "./components/Section.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";

const App = () => {
  const generateLinks = (array) => {
    return array.map(({href, text, children}, index) => {
      if (children) {
        return <div key={index} className="list-btn">
          {text}
          <div className="sub-list">{generateLinks(children)}</div>
        </div>;
      }
      return <NavLink href={href} key={index}>{text}</NavLink>
    })
  }

  const generateButtons = (array) =>
      array.map((item, index) =>
        <Button key={index}>{item}</Button>);
  const generateCards = (array) =>
    array.map(({icon, title, text}, index) =>
      <Card icon={icon} title={title} text={text} key={index}/>);

  return (
    <>
      <Header>
        <div className="header-left">
          <Logo text="Vite"></Logo>
          <Search></Search>
        </div>
        <Nav>
          {generateLinks(routes)}
        </Nav>
      </Header>
      <Main>
        <Section className="intro">
          <div className="intro-left">
            <h1><span className="intro-vite">Vite</span><br/>Next Generation Frontend Tooling</h1>
            <div className="intro-text">Get ready for a development environment that can finally catch up with you.
            </div>
            <div className="intro-buttons">
              {generateButtons(buttons)}
            </div>
          </div>
          <div className="intro-right">
              <Logo></Logo>
          </div>
        </Section>
        <Section className="cards">
          {generateCards(cards)}
        </Section>
      </Main>
    </>
  );
}

export default App;
