import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    const history = useNavigate();
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
  });
    const [data, setData] = useState([]);
  const getData = (e) => {
    const { value, name } = e.target;
    setInputVal(() => {
      return { ...inputVal, [name]: value };
    });
    };
    const addData = (e) => {
        e.preventDefault();
        const { name, email, password } = inputVal
        if (name === '') {
            alert("Enter your name")
        }
        else if (email === '') alert("Enter email");
        else if (!email.includes('@')) alert("enter valid email")
        else if (password === '') alert("Enter password");
        else if (password.length < 5) alert("Enter valid password");
        else {
          const user = JSON.parse(localStorage.getItem('user'));
          localStorage.setItem("user", JSON.stringify([...user, inputVal]));
          //setData([...data,inputVal])
          //console.log(inputVal);
            //localStorage.setItem('user_login', JSON.stringify(inputVal));
          history('/login');
        }
    }
  return (
    <div>
      <div className="container">
        <section>
          <div className="left-data">
            <h3>Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword"
              >
                <Form.Control type="date" name="date" onChange={getData} />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={addData}>
                Submit
              </Button>
            </Form>
            <p>
              Already have an account <span><NavLink to='/login'>SignIn</NavLink></span>
            </p>
          </div>
          <div className="right-data"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
