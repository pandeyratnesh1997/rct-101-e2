import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import styles from './components/app.module.css'
import Products from "./components/Products";

const App = () => {
  return <div classname={styles.app}>{/* TODO: Code here */}
 
  <Products/>
  
        
  </div>;
};

export default App;
