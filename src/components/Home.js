import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [employees, setEmployees] = useState([]);
  // api call
  const fetchEmployees = async () => {
    const result = await axios.get("http://localhost:8000/getEmployees");
    setEmployees(result.data.message);
  };
  //api-delete
  const deleteEmployee = async (id) => {
    const result = await axios.delete(
      "http://localhost:8000/deleteemployee/" + id
    );
    alert(result.data.message);
    fetchEmployees();
  };
  
  console.log(employees);
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="p-3">
      <Row>
        <Col lg={4} className="ms-3">
          <div className="w-100  container text-center text-dark mt-3 ">
            <h2 className="text-center">Employee Management App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              eos nihil autem eligendi asperiores perspiciatis cumque est
              voluptatem doloribus aspernatur esse in, animi quis corrupti
              assumenda culpa non, fuga suscipit. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quo veniam illo aut tempora quia
              magnam itaque nulla asperiores, et id officia at, atque molestiae
              quod. Ullam voluptas dolorem odio adipisci?
            </p>
          </div>
          <Link to={"/add"}>
            <Button className="ms-5 p-3" varient="info">
              Add New Employee <i class="fa-solid fa-user-plus"></i>
            </Button>
          </Link>{" "}
        </Col>

        <Col lg={6}>
          <Image
            style={{ height: "400px", display: "flex" }}
            className="w-100 ms-2 p-3 "
            src="/TIMESHEET-MANAGEMENT-1.png"
          />
        </Col>
      </Row>
      <div className="container-fluid mt-3 w-100 bg-light">
        <h3 className="text-center">List of EMployees</h3>
        <Table striped bordered hover variant="light" className="">
          <thead>
            <tr className="text-danger">
              <th>#</th>
              <th>id</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="fs-5">
            {employees?.map((employee, index) => (
              <tr>
                <td>{index}</td>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.experience}</td>
                <td>
                  <Link to={`edit/${employee.id}`}>
                    <Button className="me-2 rounded" variant="warning">
                      edit <i class="fa-solid fa-user-pen"></i>
                    </Button>
                  </Link>
                  <Link to={`view/${employee.id}`}>
                    <Button className="me-2 rounded " variant="success">
                      view <i class="fa-solid fa-eye"></i>
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteEmployee(employee.id)}
                    className="me-2 rounded"
                    variant="danger"
                  >
                    delete <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
