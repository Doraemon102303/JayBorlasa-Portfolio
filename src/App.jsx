import './App.css'

const year = new Date().getFullYear()

function App() {
  const projects = [
    {
      title: 'Modern Web App',
      description: 'A responsive web application with clean UI, smooth interactions, and optimized performance.',
      tags: ['React', 'Vite', 'CSS'],
    },
    {
      title: 'Mobile Experience',
      description: 'Cross-platform interfaces designed with accessibility and delightful micro-interactions in mind.',
      tags: ['UI/UX', 'Responsive', 'Animations'],
    },
    {
      title: 'Portfolio Platform',
      description: 'A fast, elegant showcase built to highlight projects with polished transitions and motion.',
      tags: ['Design', 'Performance', 'Branding'],
    },
  ]

  const skills = ['Angular', '.NET', 'React Native', 'PHP', 'SQL', 'Firebase', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Git', 'UI/UX']

  return (
    <div className="app">
      <div className="bg-glow bg-glow--one" />
      <div className="bg-glow bg-glow--two" />

      <header className="navbar">
        <div className="nav-inner">
          <a className="logo" href="#home">
            Glorimo<span className="logo-accent">Jay</span>.dev
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Hello, I'm</p>
              <h1 className="hero-title">
                Glorimo Jay <span className="hero-title-gradient">Borlasa</span>
              </h1>
              <p className="hero-subtitle">BSIT Graduate | Full-Stack Web & Mobile App Developer</p>
              <p className="hero-description">
                Graduated from Cavite State University – Main Campus, Indang, Cavite with a Bachelor of Science in
                Information Technology (BSIT) in 2026. I build with Angular, .NET, React Native, React, PHP, SQL,
                Firebase, HTML, CSS, Bootstrap, and JavaScript/TypeScript — crafting fast, responsive, modern, and
                aesthetic digital experiences that adapt seamlessly to any device, with thoughtful animations,
                seamless transitions, and a focus on usability.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View My Work
                  <span className="btn-arrow">→</span>
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hero-profile">
              <div className="profile-ring">
                <div className="profile-frame">
                  <img className="profile-image" src="/profile.jpg" alt="Glorimo Jay Borlasa" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  <div className="profile-fallback">GJB</div>
                </div>
              </div>
              <div className="hero-orbit">
                <span className="orbit-dot orbit-dot--one" />
                <span className="orbit-dot orbit-dot--two" />
                <span className="orbit-dot orbit-dot--three" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2 className="section-title">Designing with purpose, building with precision</h2>
            <p className="section-subtitle">
              I'm Glorimo Jay Borlasa, a BSIT graduate from Cavite State University – Main Campus, Indang, Cavite
              (2026), and a developer who loves blending clean code with modern UI to create memorable experiences.
            </p>
          </div>
          <div className="about-grid">
            <article className="about-card">
              <h3>Education</h3>
              <p>
                Bachelor of Science in Information Technology (BSIT)<br />
                Cavite State University – Main Campus, Indang, Cavite<br />
                Graduated 2026
              </p>
            </article>
            <article className="about-card">
              <h3>Freelance Experience</h3>
              <p>
                Freelancing since 2024. I've built websites for businesses, company employee systems, trackers,
                emergency systems, and mobile applications. Clients choose me for my speed, clear communication,
                and affordable rates based on the features or system they need.
              </p>
            </article>
            <article className="about-card">
              <h3>What I Do</h3>
              <p>
                From web apps built with Angular, React, and .NET using HTML, CSS, Bootstrap to mobile apps with
                React Native and PHP/SQL backends powered by Firebase, I turn ideas into polished, fully responsive,
                production-ready products that adapt to any screen size.
              </p>
            </article>
            <article className="about-card">
              <h3>Skills & Tools</h3>
              <div className="skill-chips">
                {skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="about-card">
              <h3>Approach</h3>
              <p>
                I focus on performance, accessibility, and motion that feels natural. Every detail is crafted to
                guide users with clarity and delight.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected work</h2>
            <p className="section-subtitle">
              A glimpse of the kind of experiences I enjoy building.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title} style={{ '--delay': `${index * 120}ms` }}>
                <div className="project-glow" />
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-index">0{index + 1}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span className="project-link">Coming soon</span>
                    <span className="project-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="contact-content">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Let's build something great together</h2>
              <p className="section-subtitle">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href="mailto:glorimojayborlasa@example.com">
                  Say Hello
                  <span className="btn-arrow">→</span>
                </a>
                <a className="btn btn-ghost" href="#home">
                  Back to top
                </a>
              </div>
              <p className="contact-note">Based on your name: Glorimo Jay Borlasa</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>© {year} Glorimo Jay Borlasa. Crafted with care.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App