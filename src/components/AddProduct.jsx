import React, { useRef, useState } from "react";
import {Button,Modal,ModalBody,Input,Select,RadioGroup,Radio, useDisclosure} from '@chakra-ui/react'
const AddProduct = ({products,setProducts}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  const handleChange=(e)=>{
    // let {name, value} = e.target;
    // 
  }

  return (
    <>
      <Button marginLeft={24} my={4} data-cy="add-product-button" onClick={onOpen}>Add new Product</Button>
      <Modal marginLeft={24}  isOpen={isOpen} onClose={onClose} ml={8} >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" name="title" value={products.title} onChange={handleChange}/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" value="shirt">shirt</option>
            <option data-cy="add-product-category-pant" value="pant">pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" value="male">male</Radio>
            <Radio data-cy="add-product-gender-female" value="female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" value={products.price} onChange={handleChange}/>
          <Button data-cy="add-product-submit-button" onClick={onClose} >Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
