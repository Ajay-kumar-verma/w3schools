import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react';

const WhereTo = () => {
  console.log("This is home page ")

  const content=[
    <Text className='txt' >JavaScript is the world's most popular programming language.</Text>
    , <Text className='txt' >JavaScript is the programming language of the Web.</Text>
    ,<Text  className='txt' >JavaScript is easy to learn.</Text> 
    , <Text className='txt' > This tutorial will teach you JavaScript from basic to advanced.</Text> 
];


  return (
    <>
    <VStack bg='#0e8f17'  w='100%' h="300px" >
     <hr/>
    <Text>The &lt;script &gt; </Text>
    <Text>In HTML, JavaScript code is inserted between <span color="red"> &lt;script &gl;</span> and <span color="red"> &lt;/script&gl;</span> tags. </Text>
    
    <HStack bg='#0e8f17' w="100%" borderRadius={5} p='1%' >
      <Box fontSize='20px' color='white' >  START LEANING JAVASCRIPT NOW </Box>
      <ArrowRightIcon fontSize={10} color="white" />
    </HStack>
    </VStack>


    </>
    )

  }
export default WhereTo;