
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">SK<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">Let's Talk ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span /> AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>Shiva Karthik<span>.</span></h1>
            <h2>Salesforce Developer</h2>

            <p className="intro">
              I build scalable Salesforce solutions that simplify
              business processes and create better user experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                Explore My Work ↗
              </a>
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>6+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>Salesforce</strong>
                <span>Core Expertise</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">


<img
  className="profile-photo"
  src="/profile.JPG"
  alt="Shiva Karthik - Salesforce Developer"
/>

              <p className="profile-label">SALESFORCE DEVELOPER</p>
              <h3>Turning ideas into<br />digital solutions.</h3>
              <div className="profile-tags">
                <span>Apex</span>
                <span>LWC</span>
                <span>CRM</span>
              </div>
              <div className="profile-footer">
                <span className="online-dot" /> Building what’s next
              </div>
            </div>
            <div className="floating-badge">☁ Salesforce</div>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>Technology with a <span>purpose.</span></h2>
          <p>
            I'm a Salesforce Developer focused on building maintainable
            applications, automating business workflows, and delivering
            reliable CRM solutions. I work with Salesforce platform
            technologies to turn business requirements into practical
            solutions.
          </p>
        </section>

        <section className="section skills" id="skills">
          <p className="section-label">02 / MY EXPERTISE</p>
          <h2>Tools I work <span>with.</span></h2>
          <div className="skill-grid">
            {['Apex', 'Lightning Web Components', 'Salesforce Flows',
              'SOQL & SOSL', 'REST API Integrations', 'Sales & Service Cloud',
              'OmniStudio', 'Git & CI/CD'].map((skill) => (
              <div className="skill-card" key={skill}>{skill}<span>↗</span></div>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects & <span>experience.</span></h2>
          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">PROJECT 01</span>
              <h3>Digital Loan Management</h3>
              <p>Salesforce CRM solutions, workflow automation and
                business process improvements for loan management.</p>
              <div className="project-tags">Apex · LWC · Flows</div>
            </article>
            <article className="project-card">
              <span className="project-number">PROJECT 02</span>
              <h3>Enterprise CRM Solutions</h3>
              <p>Custom Salesforce features, integrations, and deployment
                support for enterprise business requirements.</p>
              <div className="project-tags">Salesforce · APIs · CI/CD</div>
            </article>
          </div>
          <p className="disclaimer">
            Project descriptions are introductory placeholders. We’ll
            refine them with your verified experience before publishing.
          </p>
        </section>

        <section className="section contact" id="contact">
          <p className="section-label">04 / GET IN TOUCH</p>
          <h2>Have a project in <span>mind?</span></h2>
          <p>Let's connect and discuss how Salesforce can help your business.</p>
          <a className="primary-btn" href="mailto:">
            Email Me ↗
          </a>
          <p className="contact-note">
            We'll add your professional email and LinkedIn URL before launch.
          </p>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">SK<span>.</span></a>
        <p>© {new Date().getFullYear()} Shiva Karthik. Built with purpose.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
