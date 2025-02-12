import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    name: "Shaik Uzma",
    github: "https://github.com/alicejohnson",
    linkedin: "https://www.linkedin.com/in/alicejohnson/",
  },
  {
    name: "Julia solias",
    github: "https://github.com/juliasohu",
    linkedin: "https://www.linkedin.com/in/julia-solias-huelamo/",
  },
];
function AboutPage() {
  return (
    <div className="about-container">
      <div>
        <h2>About Page</h2>
        <p>
          JU Appartments is a page where you can find the best bookings
          available.
        </p>
        <p>
          This page was created by Uzma Shaik and Julia Solias. You'll find our
          contact details below.
        </p>
      </div>
      {teamMembers.map((member, index) => (
        <div className="member-card" key={index}>
          <h3>{member.name}</h3>
          <div className="social-links">
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutPage;
