import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react"
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import Confirmation from './Confirmation'
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const TextTop = styled.h2`
  margin-right: 30px;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledLinkUser = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 30px;
  font-size: 22px;
  font-weight: bold ;
`;

const Navbar = () => {
  const [confirm, setConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem("token")
  const userData = useSelector((state) => state.user)

  const onButtonLogout = () => {
    setConfirm(true)
    setLoading(true)
  };

  const onButtonConfirmLogout = () => {
        localStorage.removeItem('token')
        // localStorage.removeItem('id')

        setLoading(false)
        setConfirm(false)
        toast.warning("Logout Success")
    }
    const onButtonCancelLogout = () => {
        setConfirm(false)
        // setId(null)
        setLoading(false)
    }

  return (
    <Container>
      <Confirmation 
        isConfirm={confirm} 
        title="Logout Confirmation" 
        onCancel={onButtonCancelLogout} 
        onConfirm={onButtonConfirmLogout}
      />
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>INSTORE</Logo>
          </StyledLink>
        </Center>
        <Right>
          { token ? 
          (<Right>
            <StyledLinkUser to="/user/profile">Hi, {userData.username}</StyledLinkUser>
          <button onClick={onButtonLogout}>
            LOGOUT
          </button>
          </Right>)
          : (<Right>
          <StyledLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </StyledLink>
          </Right>)
          }
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
