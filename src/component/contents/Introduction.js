import { Box,HStack, VStack,Divider ,Spacer} from '@chakra-ui/react'
import { Text, Highlight } from '@chakra-ui/react'

const Introduction = () => {
  return (
    <>
     <VStack w="100%" bg="#9de3ac" h="80px" >
     
     <HStack>
     <Text mt="20">This page contains some examples of what JavaScript can do. </Text>
     <Spacer />
     <Text  color="#9de3ac">This page contains some examples of what JavaScript cihuliuan do. </Text>
      </HStack>
                               </VStack>
     <HStack>
     <Text as="b" fontSize="5xl">JavaScript Can Change HTML Content</Text>
        <Spacer/>
      <Text as="b" color="white" fontSize="5xl">JavaScript Can Change HTML ContentJavaScript Can Change HTML Content</Text>

     </HStack>
    </>
  )
}
export default Introduction;
