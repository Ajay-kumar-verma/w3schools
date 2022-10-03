import { Box, VStack,Divider } from '@chakra-ui/react'
import { Text, Highlight } from '@chakra-ui/react'

const Comment = () => {
  return (
    <>
      <VStack w="100%" h="300px" p="20">
        <Box mb={10} mt={10}>
          <Box m={10} ><Text fontSize={18} color="black">
          JavaScript comments can be used to explain JavaScript code, and to make it more readable.
          </Text>
          </Box>
      
          <Box m={10} >
         <Text fontSize={18} color="black">
          JavaScript comments can also be used to prevent execution, when testing alternative code.
          </Text>
          </Box>
      <Box mt="10">  <Text as="l" fontSize="30" >Single Line Comments</Text>
     <Box m="20"><Text> <Highlight query="//" styles={{px: '1', py: '1', color: 'red' }}>Single line comments start with //.</Highlight></Text></Box>
     <Box m="20" w="60%"><Text> <Highlight query="//" styles={{px: '1', py: '1', color: 'red' }}>
     Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
 This example uses a single-line comment before each code line:</Highlight></Text></Box>
           </Box>
    <Box m="20">This example uses a single-line comment before each code line:</Box>
            <Box w="900px"></Box>{' '}
        </Box>
              </VStack>
    </>
  )
}
export default Comment;
