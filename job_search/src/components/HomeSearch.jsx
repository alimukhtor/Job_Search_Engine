import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { MdPersonSearch } from "react-icons/md";
import Joblist from "./Joblist";

const HomeSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${inputValue}&limit=20`
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setJobs(result.data);
      } else {
        console.log("Something bad happen while fetched!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?categories"
      );
      if (response.ok) {
        const data = await response.json();
        setCategory(data);
        console.log("Categorues", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h1 className="text-info mt-5 text-center">
            <strong>Strive Job Search Engine</strong> <MdPersonSearch />
          </h1>
          <Form className="mt-5 mb-3" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                className="text-left  rounded-pill"
                type="search"
                placeholder="Even Yupiter Can Be Found Here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">{category[0]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Joblist jobs={jobs} inputValue={inputValue} />
      </Row>
    </Container>
  );
};
export default HomeSearch;
