export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" style={{height:600}}/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I'm Jishan Akhtar,  B.Tech graduate (2023) specializing in Computer Science. I come equipped with 6 months of practical experience as a C++, python developer, having worked with a tech stack that includes C++, PYTHON, DJANGO, JAVASCRIPT,React Js, DS & Algo, HTML, CSS, MYSQL, OOPS, DBMS.
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}
