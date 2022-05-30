import React, { useEffect, useState } from "react";
import axios from "axios";
import {Flex,Grid} from '@chakra-ui/react'
import AddProduct from './AddProduct';
import Product from './Product';
import Pagination from './Pagination'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [products,setProducts] = useState([])
    useEffect(()=>{
        const showProduct = async()=>{
            let res = axios.get("http://localhost:8080/products");
            let data = (await res).data;
            // console.log(data);
            setProducts(data);
        }
        showProduct()
    },[])



  return (
    <Flex>
    <div>
      {/*  AddProduct */}
      <AddProduct products={products} setProducts={setProducts}/>
      <Grid templateColumns="repeat(3,1fr)" marginLeft={14} gap={8}>List of Products
      {products.map((item)=>{
        return(
          <Product key={item.id} {...item} />
        )
         
      })}
        
      
      </Grid>
      {/* Pagination */}
      <Pagination/>
      </div>
     </Flex>

  );
};

export default Products;
