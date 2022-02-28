import {useEffect, useState} from 'react'
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { MdPersonSearch } from "react-icons/md";

const HomeSearch = () => {
    const [inputValue, setInputValue] = useState('')

    const fetchSearchedJobs =async(inputValue)=> {
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${inputValue}&limit=10`)
        if(response.ok){
            const jobs = await response.json()
            console.log("data", jobs);
            setInputValue(jobs)
        }
    }

    const handleInput =(e)=> {
        setInputValue(e.target.value)
    }

    useEffect(()=> {
        fetchSearchedJobs()
    }, [])
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h1 className="text-info mt-5 text-center">
            <strong>Strive Job Search Engine</strong> <MdPersonSearch />
          </h1>
          <Form className="mt-5">
            <Form.Group>
              <Form.Control
                className="text-left  rounded-pill"
                type="search"
                placeholder="Even Yupiter Can Be Found Here..."
                value={inputValue}
                onChange={handleInput}
              />
            </Form.Group>
            </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeSearch;
