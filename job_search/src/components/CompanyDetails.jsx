import { useState, useEffect } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const CompanyDetails = () => {
  const { companyDetail } = useParams();
  const [companyInfo, setCompanyInfo] = useState([]);
  const fetchCompanyInfo = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${companyDetail}`
    );
    if (response.ok) {
      const { data } = await response.json();
      console.log("Comp", data);
      setCompanyInfo(data);
    }
  };
  useEffect(() => {
    fetchCompanyInfo(companyDetail);
  }, [companyDetail]);
  return (
    <Container>
      <h1 className="text-info mt-5">
        This is "{companyDetail}" Company Details{" "}
      </h1>
      <Row className="mt-5 d-flex justify-content-center">
        {companyInfo.map((detail) => (
          <Col xs={12} md={12}>
            <Card className="text-light mt-5">
              <Card.Img variant="top" src={detail.company_logo_url} />
              <Card.Body>
                <Card.Title className="text-info">{detail.title}</Card.Title>
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                ></Card.Text>
                <Button variant="success">{detail.salary}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default CompanyDetails;
