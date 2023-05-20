import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {v4 as uuid} from "uuid"
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function Add() {
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [desig,setDesig]=useState('')
    const [sal,setSal]=useState('0')
    const [exp,setExp]=useState('0')

    useEffect(()=>{
        setId(uuid().slice(0,2))
    },[])
const location=useNavigate()
    const addnewEmployee=async (e)=>{
        e.preventDefault()
        setId(uuid().slice(0,3))

         const body={
            id,
            name,
            designation:desig,
            salary:sal,
            experience:exp,
        }
       const result= await axios.post('http://localhost:8000/addEmployee',body)
location('/')
       alert(result.data.message)
    }
    // console.log(id);
    // console.log(name);
    // console.log(desig);
    // console.log(sal);
    // console.log(exp);
  return (
    <div>
        <div>
        <Image
            style={{ height: "400px", display: "flex",color:"white" }}
            className="w-100 ms-2 p-3 "
            src="/addem.png"
          />
        </div>
        <h1 className='text-center'>ADD EMPLOYEE</h1>
         <Form className='container p-3 bg-light w-75'>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control onChange={(e)=>setDesig(e.target.value)}type="text" placeholder="Designation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={(e)=>setSal(e.target.value)} type="text" placeholder="Salary" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formGroupExperience">
        <Form.Label>Experience</Form.Label>
        <Form.Control onChange={(e)=>setExp(e.target.value)} type="text" placeholder="Experience" />
      </Form.Group>
<div className='text-center'>
          <Button onClick={(e)=>addnewEmployee(e)}  className='btn btn-secondary  w-25 p-2 mt-3' style={{alignItems:"center" }} variant="secondary">ADD</Button>{' '}
    
</div>

    </Form>

        
    </div>
  )
}

export default Add