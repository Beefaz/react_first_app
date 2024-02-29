import '../styles/section.css'

// eslint-disable-next-line react/prop-types
const Section = ({className, children}) => {

  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  );
}

export default Section;
