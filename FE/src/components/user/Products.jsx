import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./ProductCard";
import { Pagination } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";

const Box = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h2`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setsearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6)
  
  useEffect(() => {
    Axios.get(process.env.REACT_APP_API + "/products")
      .then((res) => {
        setProducts(() => res.data);
        console.log(res);
        setPage(1);
      }) 
      .catch((error) => {
        console.log(error);
      });
  },[
    page,
    productsPerPage
  ]);

  return (
    <Box>
      {/* <Title>Men</Title> */}
      <Container>
        {products.map((product, index) => (
          <Product productData={product} key={index} />
        ))}
        
      </Container>
      <Pagination margin count={5} variant="outlined" />
      
    </Box>
  );
};

export default Products;
