import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate ,Link} from "react-router-dom";

const Signin = () => {
  const history = useNavigate();
  const [inputVal, setInputVal] = useState({
    name: "",
    password: "",
    list: []
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
    const userArr = localStorage.getItem('user');
    const { name, password } = inputVal;
    
    if (name === "") alert("Enter name");
    else if (password === "") alert("Enter password");
    else if (password.length < 5) alert("Enter valid password");
    else {
      if (userArr && userArr.length) {
        const userinfo = JSON.parse(userArr);
        const userlogin = userinfo.filter((el, key) => {
          return el.name === name && el.password === password;
        })
        if (userlogin.length === 0) alert("Invalid credentials");
        else {
          localStorage.setItem("user_login", JSON.stringify(inputVal));
          history('/todo');
        }
      }
    }
  };
  return (
    <div>
      <div className="container">
        <section>
          <div className="left-data">
            <h3>Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  name="name"
                  onChange={getData}
                  placeholder="Enter name"
                />
                <Form.Text className="text-muted"></Form.Text>
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
              Dont have an account{" "}
              <span>
                <NavLink to="/">Signup</NavLink>
              </span>
            </p>
          </div>
          <div className="right-data"></div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
