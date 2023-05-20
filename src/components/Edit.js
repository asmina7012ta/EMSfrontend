import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [desig, setDesig] = useState("");
  const [sal, setSal] = useState("0");
  const [exp, setExp] = useState("0");

  const location=useNavigate()


  const params = useParams();
  const fetchEmpl = async () => {
    const result = await axios.get(
      "http://localhost:8000/get_employee/" + params.id
    );

    setName(result.data.message.name);
    setDesig(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);
  };
  const editEmployee = async (e) => {
    e.preventDefault();
    const body = {
      id: params.id,
      name,
      designation: desig,
      salary: sal,
      experience: exp,
    };
    const result = await axios.post(
      "http://localhost:8000/editEmployee/",
      body
    );
    location('/')
    alert(result.data.message);
  };
  useEffect(() => {
    fetchEmpl();
  }, []);
  return (
    <div>
      <h1>Update Employee</h1>
      <Form className="container p-3 bg-light w-75">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDesignation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            onChange={(e) => setDesig(e.target.value)}
            value={desig}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            onChange={(e) => setSal(e.target.value)}
            value={sal}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            onChange={(e) => setExp(e.target.value)}
            value={exp}
            type="text"
          />
        </Form.Group>
        <div className="text-center">
          <Button
            onClick={(e) => editEmployee(e)}
            className="btn btn-secondary  w-25 p-2 mt-3"
            style={{ alignItems: "center" }}
            variant="secondary"
          >
            UPDATE
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}

export default Edit;
