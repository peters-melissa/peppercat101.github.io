import "./styles/app.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <div className="content">
        <div id="about" className="section">
          <h2>About</h2>
          <p>
            Staff Software Engineer with 10+ years of experience building intuitive full-stack systems and internal platforms. Driven by
            a passion for eliminating developer and operational friction—whether it's automating a slow, manual process or refining a
            complex interface, I thrive on listening to team pain points and turning repetitive frustration into fast, elegant workflows.
            Deep expertise in Ruby on Rails, React, and GraphQL, with a track record of scaling developer experience and cross-
            functional productivity.
          </p>
        </div>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <div className="sub-section">
            <h4>
              Staff Software Engineer
              <div className="sub-heading">Aug 2025 – Present</div>
              <div className="sub-heading">
                ODAIA Intelligence | Toronto, Canada
              </div>
            </h4>

            <ul>
              <li>
                Led the architecture and development of an internal platform powering 100% of company-wide deliveries and client
                messaging, processing 1.5M+ records weekly and empowering non-technical teams to control output independently.
              </li>
              <li>
                Improved an internal configuration tool by integrating a JSON editor with syntax highlighting, predefined dropdowns,
                and format guidance—reducing configuration errors.
              </li>
              <li>
                Proposed and led migration of hardcoded business logic to configuration files, enabling the implementations team to
                onboard clients independently without engineering support.
              </li>
              <li>
                Implemented performance reporting into data pipelines, enabling engineers to identify bottlenecks and measure
                optimization impact in real-time.
              </li>
              <li>
                Built automated retry and deduplication processes, reducing manual engineering intervention for common delivery
                issues by 90%.
              </li>
              <li>
                Implemented pre-delivery pipeline runs for high-risk, bi-weekly deployments to detect issues proactively.
              </li>
            </ul>
            <span>
              <b>Technology Stack:</b> Python, React, TypeScript, AWS, Dagster, Snowflake
            </span>
          </div>
          <div className="sub-section">
            <h4>
              Software Engineer
              <div className="sub-heading">Mar 2018 – Jul 2025</div>
              <div className="sub-heading">
                Nulogy | Toronto, Canada
              </div>
            </h4>

            <ul>
              <li>
                Led technical architecture for cross-functional initiative, translating stakeholder requirements into scalable solutions
                that aligned engineering delivery with business priorities.
              </li>
              <li>
                Spearheaded migration of critical application from PaaS to IaaS, coordinating with SRE to ensure zero-downtime
                deployment and improved scalability.
              </li>
              <li>
                Designed and optimized CI/CD pipeline, reducing deployment time by 50% and improving build reliability for the
                engineering team.
              </li>
              <li>
                Led the migration of an internal JavaScript library to an external npm package, transitioning the codebase to modern
                React best practices and improving maintainability across teams.
              </li>
              <li>
                Partnered with the design team to validate front-end feasibility and performance of UI proposals, ensuring alignment
                between design vision and engineering constraints.
              </li>
              <li>
                Optimized application and build pipelines, reducing page load times and improving developer build speed.
              </li>
              <li>
                Led on-call incident response and post-mortems, identifying root causes and implementing fixes that reduced incident
                recurrence.
              </li>
              <li>
                Strategic Problem Solving: Solved complex technical challenges through structured analysis, hands-on execution, and
                close cross-team collaboration.
              </li>
            </ul>
            <span>
              <b>Technology Stack:</b> JavaScript, TypeScript, React, GraphQL, Ruby on Rails, AWS
            </span>
          </div>
          <div className="sub-section">
            <h4>
              Senior Software Product Developer
              <div className="sub-heading">Jan 2013 – Dec 2017</div>{" "}
              <div className="sub-heading">
                GEW Technologies | Pretoria, South Africa
              </div>
            </h4>

            <ul>
              <li>
                Designed system architecture and feature specifications based on B2B client requirements, translating stakeholder
                needs into technical specs.
              </li>
              <li>
                Built Java desktop applications using a structured framework with Oracle database integration for enterprise clients.
              </li>
              <li>
                Led development of a high-traffic live view feature processing 1K records per minute with sub-second latency.
              </li>
              <li>
                Demonstrated product on-site for customers and collaborated with hardware engineers to ensure seamless software-
                hardware integration.
              </li>
            </ul>
            <span>
              <b>Technology Stack:</b> Java Swing Desktop, Oracle, Git, PHP, MySQL
            </span>
          </div>
          <div className="sub-section">
            <h4>
              Internship
              <div className="sub-heading">May 2012 – Aug 2012</div>{" "}
              <div className="sub-heading">
                Netsys | Pretoria, South Africa
              </div>
            </h4>

            <ul>
              <li>
                Fixed bugs and improved code quality in a weather forecasting application during the internship.
              </li>
            </ul>
            <span>
              <b>Technology Stack:</b> Flex
            </span>
          </div>
          <h5>
            See more on my{" "}
            <a
              href="https://www.linkedin.com/in/melissaingels/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            profile
          </h5>
        </div>
        <div id="education" className="section">
          <h2>Education</h2>
          <div className="sub-section">
            <h4>
              BSc (Hons) Computer Science, BIS Multimedia
              <div className="sub-heading">2012</div>{" "}
              <div className="sub-heading">
                University of Pretoria | Pretoria, South Africa
              </div>
            </h4>
          </div>
        </div>
        <div id="skills" className="section">
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p>
            Ruby | JavaScript | TypeScript | Python | Java
          </p>
          <h3>Frameworks &amp; Libraries</h3>
          <p>
            Ruby on Rails | React | GraphQL | Dagster
          </p>
          <h3>Infrastructure &amp; DevOps</h3>
          <p>
            AWS | Terraform | CI/CD | Docker | IaaS | PaaS
          </p>
          <h3>Databases</h3>
          <p>
            PostgreSQL | Snowflake | Oracle | MySQL
          </p>
          <h3>Developer Tools</h3>
          <p>
            Git | JSON configuration | automated testing
          </p>
          <h3>Domain Expertise</h3>
          <p>
            Internal tooling | platform engineering | system performance optimization | incident management
          </p>
        </div>
        <div id="contact" className="section">
          <h2>Contact</h2>
          <div className="sub-section">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              contact@melissapeters.me
            </div>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/melissaingels/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Peppercat101" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
