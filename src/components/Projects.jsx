import './Projects.css';
import OCRimage from '../assets/OCR-scanner-image.png';
import Quizimage from '../assets/DeliveryWarehouseQuiz.png';
import Journalimage from '../assets/LocationVideoJournal.png';

function Projects() {
  const projects = [
    {
      title: 'OCR Product Check-Off',
      description: 'A web application that utilizes OCR technology to scan product labels and generate check-off lists for delivery trucks.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: OCRimage,
      github: 'https://github.com/patrickhilmoe/DeliveryStaging',
      demo: 'https://staginglist.netlify.app'
    },
    {
      title: 'Appliance Delivery and Warehouse Quiz',
      description: 'Quiz quiz application for training delivery installers and warehouse workers on product knowledge and safety protocols.',
      tags: ['React', 'Supabase', 'Tailwind CSS'],
      image: Quizimage,
      github: 'https://github.com/patrickhilmoe/DeliveryDept-Quiz',
      demo: 'https://deliverywarehousequiz.netlify.app/'
    },
    {
      title: 'Location Video Journal',
      description: 'A spatial journaling application for documenting location-based video entries.',
      tags: ['React', 'Supabase', 'Tailwind CSS'],
      image: Journalimage,
      github: 'https://github.com/patrickhilmoe/location-video-log',
      demo: 'https://locationvideolog.netlify.app/'
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather application with location tracking, forecasts, and interactive maps.',
    //   tags: ['JavaScript', 'APIs', 'CSS3'],
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   demo: '#'
    // },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for tracking social media performance and engagement metrics.',
    //   tags: ['React', 'D3.js', 'Node.js'],
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   demo: '#'
    // },
    // {
    //   title: 'Recipe Finder App',
    //   description: 'Recipe search and meal planning application with nutritional information and shopping lists.',
    //   tags: ['React', 'REST API', 'CSS3'],
    //   image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   github: '#',
    //   demo: '#'
    // }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View on GitHub">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={project.demo} className="project-link" aria-label="View live demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
