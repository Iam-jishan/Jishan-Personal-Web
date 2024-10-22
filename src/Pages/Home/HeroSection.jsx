export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jishan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Python</span>{" "}
            <br />
           Developer
          </h1>
          <p className="hero--section-description">
          B.Tech Computer Science. Full Stack Software Engineer. Expert in "C++" 
          and "Data Structure and Algorithm". Possess Excellent Problem-Solving and Communication Skills.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.jpg" alt="Hero Section" style={{height:600}}/>
      </div>
    </section>
  );
}
