import styled from "styled-components";
import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import Axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { toast } from "react-toastify";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight:bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Formrow = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function FPUser () {
  const email = useRef("")
  const [loading, setLoading] = useState(false)

  const onBtnSendFP = (e) => {
        e.preventDefault()

        const checkEmail = {
            email : email.current.value
        }
        console.log(email); 
        setLoading(true)
        Axios.post(process.env.REACT_APP_API + '/auth/user/forget-password', checkEmail)
        .then((respond) => {
            console.log(respond.data)
            setLoading(false)

            toast.info(respond.data)
        })
        .catch((error) => {
            setLoading(false)
            toast.error(error.response.data)
            console.log(error)
        })
  }
  

  return (
    <Container>
      <Wrapper>
        <Title>FORGOT PASSWORD?</Title>
        <p>Enter your registered email below to receive password reset instruction</p>
        <Form>
          <Input ref={email} placeholder="Insert Email" />
          <Formrow>
            <Button onClick={onBtnSendFP}>SEND EMAIL</Button>
            <Link href="http://localhost:3000/login">BACK TO LOGIN</Link>
          </Formrow>
        </Form>
      </Wrapper>
    </Container>
  );
};

