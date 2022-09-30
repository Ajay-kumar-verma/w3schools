import Header from "./component/header/Header";
import SideBar from "./component/sideBar/SideBar";
import { Stack, HStack, VStack, Box, StackDivider ,Spacer } from '@chakra-ui/react'
import  Content  from "./component/contents/Content";
 import Main from "./component/contents/Main";

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
