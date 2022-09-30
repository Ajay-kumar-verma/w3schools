import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import './content.css' 
const Content = () => {
    const heading = "JavaScript Tutorial"
    const content=[
        <Text className='txt' >JavaScript is the world's most popular programming language.</Text>
        , <Text className='txt' >JavaScript is the programming language of the Web.</Text>
        ,<Text  className='txt' >JavaScript is easy to learn.</Text> 
        , <Text className='txt' > This tutorial will teach you JavaScript from basic to advanced.</Text> 
    ];

    return (<>
        <HStack ml={200} p={10} bg="blue" >
            <VStack>
                <Box height='80px' >
                    <img src="https://picsum.photos/200/300?random=2" height="70px" width="1000" alt="image hai" />
                </Box>
                <Box height="70px" w='100%' bg="white" >
                    <Text fontSize={40} color="black"  > {heading} </Text>
                </Box>
                <Flex>
                    <HStack bg='#0e8f17' borderRadius={10}   >
                        <ChevronLeftIcon fontSize={30} color="white" />
                        <Box fontSize='30px' color='white' >  Home </Box>
                    </HStack>
                    
                    <Spacer />
                    <Box w="800px" ></Box>
                    <HStack bg='#0e8f17' borderRadius={10} >
                        <Box fontSize='30px' color='white' >  Next </Box>
                        <ChevronRightIcon fontSize={30} color="white" />
                    </HStack>
                </Flex>
                <Box height='150px' bg="#7bd481" w="90%" p="5%" >
                {
                    content.map(ele=>ele)
                }
              
              <HStack bg='#0e8f17' w="100px" borderRadius={10} >
                        <Box fontSize='30px' color='white' >  START LEANING JAVASCRIPT NOW </Box>
                        <ArrowRightIcon fontSize={30} color="white" />
                    </HStack>

                </Box>
           </VStack>
            {/* <Box> <img src="https://picsum.photos/200/300?random=3"  width="70px" height="500px"  alt="image hai" /> </Box> */}
        </HStack>
    </>)
}
export default Content;