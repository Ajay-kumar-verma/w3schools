import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";
import { Stack, HStack, VStack, Box, StackDivider ,Spacer } from '@chakra-ui/react'
import {  Route, Router } from 'react-router-dom';
import  Content  from "./component/content/Content";

 const  App=()=> {
  return (
    <>
    <Header />
     <SideBar />
    <Content /> 
 
       </>
  );
}

export default App;
