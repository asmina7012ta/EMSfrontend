import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function View() {
  const [employee, setEmployee] = useState([]);

  const params = useParams();
  // console.log(params.id);
  const fetchEmpl = async () => {
    const result = await axios.get(
      "http://localhost:8000/get_employee/" + params.id
    );
    setEmployee(result.data.message);
  };
  console.log(employee);

  useEffect(() => {
    fetchEmpl();
  }, []);
  return (
    <>
      <Row>
          <div className="text-center container w-50">
            <Image
              style={{ height: "300px", width: "50%" }}
              src="/SINGLEemPL.webp"
            ></Image>
          </div>{" "}
    <div className=" text-center">
    <Card className="text-center w-50 container mb-5 mt-5  p-3 bg-light">
      <Card.Header> <h2>Employee Name: {employee.name}</h2> </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Employee Id: {employee.id}</ListGroup.Item>
        <ListGroup.Item>Designation: {employee.designation}</ListGroup.Item>
        <ListGroup.Item>Salary: {employee.salary}</ListGroup.Item>
      </ListGroup>
    </Card>
      </div>
      </Row>
    </>
  );
}

export default View;
