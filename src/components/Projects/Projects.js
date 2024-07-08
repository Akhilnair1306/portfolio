import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/newsAtaGlance.png";
import Ipl from "../../Assets/Projects/ipl.png";
import MakemyForm from "../../Assets/Projects/makemyform.png";
import KharchaKalkulator from "../../Assets/Projects/karchakalkulator.png";
import Memomate from "../../Assets/Projects/memomate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MakemyForm}
              isBlog={false}
              title="MakemyForm"
              description=""
              ghLink="https://github.com/Akhilnair1306/MakemyForm"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KharchaKalkulator}
              isBlog={false}
              title="KharchaKalkulator"
              description=""
              ghLink="https://github.com/Akhilnair1306/KharchaKalkulator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ipl}
              isBlog={false}
              title="Ipl Match Predictor"
              description=""
              ghLink="https://github.com/Akhilnair1306/IPL_Match_prediction"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Memomate}
              isBlog={false}
              title="Memomate"
              description=""
              ghLink="https://github.com/Akhilnair1306/memomate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News At a Glance"
              description=""
              //ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
