import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  Server,
  Code2,
  MapPin,
  Briefcase,
  Laptop,
  CheckCircle,
  Zap,
  Users,
  MessageSquare,
} from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript", "Node.js", "Express", "MongoDB",
    "React", "JWT", "Git", "Postman"
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Zap },
    { name: "Communication", icon: MessageSquare },
    { name: "Leadership", icon: Users },
  ];

  return (
    <section style={{ background: "#0f172a", color: "white", padding: "80px 0" }}>
      <Container>

        {/* HEADER */}
        <div className="text-center mb-5">
          <p className="text-info d-flex justify-content-center align-items-center gap-2">
            <MapPin size={16} /> Ahmedabad, Gujarat
          </p>

          <h1 className="fw-bold">
            Hi, I'm <span className="text-primary">Prince Panchal</span>
          </h1>

          <p className="text-secondary">
            MERN Stack Developer focused on scalable backend & modern web apps
          </p>
        </div>

        {/* ABOUT */}
        <Row className="mb-4">
          <Col>
            <Card className="bg-dark text-light border-0 shadow-lg p-4 hover-card">
              <h4 className="mb-3 d-flex align-items-center gap-2">
                <Code2 /> About Me
              </h4>
              <p>
                I specialize in backend development using Node.js, Express, and MongoDB.
                I build secure REST APIs, authentication systems, and optimize performance.
                I also create React frontend and integrate everything smoothly.
              </p>
            </Card>
          </Col>
        </Row>

        {/* WHAT I DO */}
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <Card className="bg-primary text-white border-0 shadow p-4 h-100 hover-card">
              <Server size={28} className="mb-3" />
              <h5>Backend Development</h5>
              <p>
                Building scalable APIs, authentication systems, and optimized database logic.
              </p>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="bg-dark text-light border-0 shadow p-4 h-100 hover-card">
              <Laptop size={28} className="mb-3 text-info" />
              <h5>Frontend Integration</h5>
              <p>
                Creating responsive React UI and connecting it with backend systems.
              </p>
            </Card>
          </Col>
        </Row>

        {/* SKILLS */}
        <Row className="mb-4">
          <Col>
            <Card className="bg-dark text-light border-0 shadow p-4 hover-card">
              <h5 className="mb-3">Tech Stack</h5>
              <div>
                {skills.map((skill, i) => (
                  <Badge bg="secondary" key={i} className="me-2 mb-2 p-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </Col>
        </Row>

        {/* EXPERIENCE */}
        <Row className="mb-4">
          <Col>
            <Card className="bg-dark text-light border-0 shadow p-4 hover-card">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <Briefcase /> Experience
              </h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <CheckCircle className="text-success me-2" />
                  Built 3+ projects
                </li>
                <li className="mb-2">
                  <CheckCircle className="text-success me-2" />
                  MongoDB optimization & indexing
                </li>
                <li>
                  <CheckCircle className="text-success me-2" />
                  3 Month Internship (Node.js Developer)
                </li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* WHY ME */}
        <Row>
          <Col>
            <Card className="bg-dark text-light border-0 shadow p-4">
              <h5 className="mb-4">Why Me</h5>

              <Row>
                {softSkills.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Col md={4} key={i} className="mb-3">
                      <div className="text-center hover-card p-3 rounded">
                        <Icon size={28} className="mb-2 text-info" />
                        <p className="mb-0">{item.name}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
}