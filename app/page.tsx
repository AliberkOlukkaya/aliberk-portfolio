import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Header } from "@/components/header";
import { experiences, personal, projects, skillGroups } from "@/data/portfolio";

const traffic = projects[0];
const phoenix = projects[1];

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: "Computer Engineer focused on AI and data engineering.",
    email: `mailto:${personal.email}`,
    homeLocation: { "@type": "Place", name: personal.location },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Eastern Mediterranean University" },
    sameAs: [personal.linkedin, personal.github],
    image: "/aliberk-olukkaya-portrait.jpg",
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-main">
            <div className="hero-copy">
              <p className="location-kicker"><span aria-hidden="true" /> Konya, Türkiye</p>
              <h1><span>Aliberk</span> <span>Olukkaya</span></h1>
              <p className="hero-role">Computer Engineer</p>
              <p className="hero-statement">Building practical AI-powered and data-driven products</p>
              <div className="hero-actions">
                <a className="button" href="#projects">View Projects <ArrowRight size={17} aria-hidden="true" /></a>
                <a className="button button-secondary" href={personal.github} target="_blank" rel="noreferrer">
                  <GitHubIcon width={17} height={17} /> GitHub Profile
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <Image
                src="/aliberk-olukkaya-portrait.jpg"
                alt="Portrait of Aliberk Olukkaya"
                width={1122}
                height={1402}
                priority
                sizes="(max-width: 720px) 72vw, 330px"
              />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-layout">
            <div className="terminal-label" aria-hidden="true"><span>$</span> whoami<span className="cursor">_</span></div>
            <div>
              <h2>Engineer first. Always learning.</h2>
              <p>
                I’m a Computer Engineering graduate with practical experience in Python, machine learning, deep learning, backend systems, databases, and modern web interfaces. I’ve built AI-powered applications that connect intelligent workflows to software people can use. My current focus is AI engineering, data engineering, and Python development. I approach each project through continuous learning and product-focused problem solving.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study case-study-dark" id="projects">
          <div className="container case-heading">
            <p className="section-number">01 <span>Featured Work</span></p>
            <p>Selected projects presented as complete systems.</p>
          </div>

          <article className="container case-grid" id="traffic-project">
            <figure className="project-screenshot traffic-screenshot">
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>Traffic Enforcement System · Citizen dashboard</small></div>
              <Image
                src="/projects/traffic-enforcement-dashboard.png"
                alt="Traffic Enforcement System citizen dashboard showing registered vehicles and violation history"
                width={1790}
                height={878}
                sizes="(max-width: 800px) 100vw, 55vw"
              />
              <figcaption>Citizen vehicle and violation dashboard.</figcaption>
            </figure>

            <div className="case-copy">
              <div className="award-pill"><GraduationCap size={15} aria-hidden="true" /> Best Graduation Project</div>
              <p className="case-type">Graduation Project</p>
              <h2>{traffic.name}</h2>
              <div className="case-facts">
                <div><h3>Problem</h3><p>Traffic evidence needs to move from field reporting into a structured workflow with appropriate access for citizens, police officers, and administrators.</p></div>
                <div><h3>Solution</h3><p>A full-stack platform that manages violation records and uses Claude Vision AI to analyze uploaded evidence asynchronously.</p></div>
              </div>
              <h3 className="feature-heading">Key features</h3>
              <ul className="case-features">
                {traffic.features.slice(0, 3).map((feature) => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}
              </ul>
              <div className="case-tags">{traffic.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <a className="case-link" href={traffic.href} target="_blank" rel="noreferrer">View Repository <ExternalLink size={14} aria-hidden="true" /></a>
            </div>
          </article>
        </section>

        <section className="case-study case-study-light" id="phoenixdf-project">
          <article className="container case-grid case-grid-reverse">
            <div className="case-copy">
              <p className="case-type">Personal Project · 2026</p>
              <h2>{phoenix.name}</h2>
              <div className="case-facts">
                <div><h3>Problem</h3><p>Academic PDFs are dense, and moving between reading, note-taking, self-testing, and follow-up questions can fragment the research workflow.</p></div>
                <div><h3>Solution</h3><p>A Python and Flask research workspace that turns PDF content into summaries, document-aware chat, quizzes, flashcards, and analysis workflows.</p></div>
              </div>
              <h3 className="feature-heading">Key features</h3>
              <ul className="case-features">
                {phoenix.features.slice(0, 3).map((feature) => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}
              </ul>
              <div className="case-tags">{phoenix.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <a className="case-link" href={phoenix.href} target="_blank" rel="noreferrer">View Repository <ExternalLink size={14} aria-hidden="true" /></a>
            </div>

            <figure className="project-screenshot">
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>PhoenixDF · Document workspace</small></div>
              <Image
                src="/projects/phoenixdf-summary.png"
                alt="PhoenixDF document summary and AI chat workspace"
                width={1918}
                height={907}
                sizes="(max-width: 800px) 100vw, 55vw"
              />
              <figcaption>PhoenixDF document workspace.</figcaption>
            </figure>
          </article>
        </section>

        <section className="experience-section" id="experience">
          <div className="container two-column-section">
            <div className="section-intro">
              <p className="section-number">02 <span>Experience</span></p>
              <h2>Learning through building and responsibility.</h2>
            </div>
            <div className="compact-timeline">
              {experiences.map((item) => (
                <article key={item.role}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <time>{item.period}</time>
                  <h3>{item.role}</h3>
                  <p className="timeline-org">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="container">
            <div className="skills-heading">
              <div><p className="section-number">03 <span>Skills</span></p><h2>A practical engineering toolkit.</h2></div>
              <p>Technologies used across academic work, internship experience, and personal projects.</p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <article key={group.title}>
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="achievement-section" id="achievements">
          <div className="container achievement-layout">
            <div className="achievement-mark"><GraduationCap aria-hidden="true" /></div>
            <div>
              <p>Achievements</p>
              <h2>Best Graduation Project Award</h2>
              <span>Department of Computer Engineering · Eastern Mediterranean University · 2026</span>
            </div>
            <p>The Artificial Intelligence Based Traffic Enforcement System was selected as the department’s best graduation project.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="section-number">04 <span>Contact</span></p>
              <h2>Have a role or project in mind?</h2>
              <p>I’m open to conversations about AI engineering, data engineering, and Python development opportunities.</p>
              <a className="button button-light" href={`mailto:${personal.email}`}>Start a conversation <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <address>
              <a href={`mailto:${personal.email}`}><Mail aria-hidden="true" /><span><small>Email</small>{personal.email}</span></a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /><span><small>LinkedIn</small>Connect professionally</span></a>
              <a href={personal.github} target="_blank" rel="noreferrer"><GitHubIcon /><span><small>GitHub</small>View profile</span></a>
              <div><MapPin aria-hidden="true" /><span><small>Location</small>{personal.location}</span></div>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Aliberk Olukkaya</p>
          <p>Computer Engineer · AI &amp; Data Engineering</p>
          <a href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
