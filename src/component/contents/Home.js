import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react';
const Home = () => {
  console.log("This is home page ")

  const content = [
    <Text className='txt' >JavaScript is the world's most popular programming language.</Text>
    , <Text className='txt' >JavaScript is the programming language of the Web.</Text>
    , <Text className='txt' >JavaScript is easy to learn.</Text>
    , <Text className='txt' > This tutorial will teach you JavaScript from basic to advanced.</Text>
  ];


  return (
    <>

      <VStack bg='#bed1bf' w='100%' h="250px" >
        <HStack mt="30" >
          <Box>  {
            content.map(ele => ele)
          }
          </Box>
          <Box w="560px" ></Box>
        </HStack>
        <HStack p='1%' >
          <Box >
            <HStack bg='#0e8f17' borderRadius={10} p={10}  ><Box fontSize='20px' color='white' >  START LEANING JAVASCRIPT NOW </Box>
              <ArrowRightIcon fontSize={10} color="white" />
            </HStack>
          </Box>
          <Box w="560px" ></Box>

        </HStack>


      </VStack>


    </>
  )

}
export default Home;