import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../bg.png";

function Header() {
  return (
    <Container className="mt-4">
      <Row className="gap-5">
        <Col className="bg-success ">
          <img className="w-25 rounded-lg " src={img} alt="" />
        </Col>
        <Col className="bg-primary">
          <p className="mt-3">
            Quiz success ultimately comes from leading the right people into a
            smart sales funnel. That’s because your quiz has the strongest
            selling potential when it is backed by a well-thought out funnel,
            helping you attract your email subscribers and earn more income.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
