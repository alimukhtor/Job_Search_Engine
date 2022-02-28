import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Joblist = ({ jobs }) => {
  return (
    <>
      {jobs &&
        jobs.map((j) => (
          <Col xs={12} md={4} lg={3} key={j._id}>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  <Link to={`/${j.company_name}`}>
                    <span className="text-info">
                      <strong>{j.company_name}</strong>
                    </span>
                  </Link>
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  <a href={j.url}>
                    <span className="text-light">{j.title}</span>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};
export default Joblist;
