import { Container, Col, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="intro-text">
              <h1>Nonton Films</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisi vel consectetur consectetur, nisi nisi consectetur
                nisi, euismod nisi nisi vel consectetur consectetur.
              </p>
            </div>
            <div className="intro-button"><Button variant="primary">Explore</Button></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;