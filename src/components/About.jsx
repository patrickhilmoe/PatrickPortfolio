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
              I specialize in React and modern frontend development, and backend development with Node.js.
              Currently looking for my first professional role where I
               can grow fast and contribute.
            </p>
            <p>
              My journey in web development started with a drive to improve processes at work. With the rise of AI,
              I have been able to leverage the techology to quickly learn and build projects. 
              I am always eager to learn new technologies and stay updated with industry trends.
            </p>
            <p>
              When I am not coding, you can find me spending time with my growing family. 
              Otherwise, I am taming my wild yard in the summer while listening to an audio book or
              occupying myself indoors away from the Pacific Northwest rain.
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
