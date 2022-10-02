import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react';
const Home = () => {
  console.log("This is home page ")

  const content=[
    <Text className='txt' >JavaScript is the world's most popular programming language.</Text>
    , <Text className='txt' >JavaScript is the programming language of the Web.</Text>
    ,<Text  className='txt' >JavaScript is easy to learn.</Text> 
    , <Text className='txt' > This tutorial will teach you JavaScript from basic to advanced.</Text> 
];


  return (
    <>
    
    <VStack bg='#0e8f17' w='100%' h="300px" >
   {
      content.map(ele => ele)
    }
    <HStack bg='#0e8f17' w="400px" borderRadius={10} p='1%' >
      <Box fontSize='20px' color='white' >  START LEANING JAVASCRIPT NOW </Box>
      <ArrowRightIcon fontSize={10} color="white" />
    </HStack>
    </VStack>


    </>
    )

  }
export default Home;