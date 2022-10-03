import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {useLocation } from "react-router-dom/";
import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'
import { Route ,Router } from "react-router-dom/";
import './content.css' ;
import Main  from './Main';

const Content = () => {
  const [heading ,setHeading]=useState("");
 
    const location=useLocation();
   
    
    useEffect(()=>{
      let title=location.pathname ;
       
      if(title==='/' || title==="/JS HOME" ){
        setHeading(`Tutorial`)
        }else{
         title=title?.substring(3,title?.length)    
        setHeading(title)
            
        }
            
  },[location.pathname])
     
    const content=[
        <Text className='txt' >JavaScript is the world's most popular programming language.</Text>
        , <Text className='txt' >JavaScript is the programming language of the Web.</Text>
        ,<Text  className='txt' >JavaScript is easy to learn.</Text> 
        , <Text className='txt' > This tutorial will teach you JavaScript from basic to advanced.</Text> 
    ];

    
    return (<>
            
<HStack ml={200}  >
            <VStack>
                <Box height='80px' >
                    <img src="https://picsum.photos/200/300?random=2" height="70px" width="1000" alt="image hai" />
                </Box>
                <Box height="40px" w='100%' bg="white" >
                    <Text fontSize={40} color="black"  > JAVASCRIPT {heading} </Text>
                </Box>
                <Flex>
                    <HStack bg='#0e8f17' borderRadius={10} p={5}  >
                        <ChevronLeftIcon fontSize={30} color="white" />
                        <Box fontSize='30px' color='white' >  Home </Box>
                    </HStack>
                    
                    <Spacer />
                    <Box w="800px" ></Box>
                    <HStack bg='#0e8f17' borderRadius={10} p={5} >
                        <Box fontSize='30px' color='white' >  Next </Box>
                        <ChevronRightIcon fontSize={30} color="white" />
                    </HStack>
                </Flex>
                
               <Main  />     
               
                </VStack>
            <Box> <img src="https://picsum.photos/200/300?random=3"  width="100px" height="500px"  alt="image hai" /> </Box>
        </HStack>
    
     


    </>)
}
export default Content;