import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a web developer who recently transitioned into the field. 
              I specialize in React and modern frontend development, and I build things because I 
              genuinely enjoy the craft. Currently looking for my first professional role where I
               can grow fast and contribute from day one.
            </p>
            <p>
              My journey in web development started with a curiosity and passion for creating applications. 
              I have since honed my skills through various projects, both personal and to improve my current
              work. I am always eager to learn new technologies and stay updated with industry trends.
            </p>
            <p>
              When I am not coding, you can find me spending time with my growing family. 
              Otherwise, I am taming my wild yard in the summer while listening to a fictional audiobook or
              occupying myself indoors to get away from the Pacific Northwest rain.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
