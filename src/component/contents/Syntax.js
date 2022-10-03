import { VStack, Box, Divider } from '@chakra-ui/react'
import { Text, Highlight } from '@chakra-ui/react'

const Syntax = () => {
  return (
    <>
      <VStack bg="#bae3c1" w="100%" h="300px">
        <Box mb={10} mt={10}>
          <Text fontSize={20} color="black">
            JavaScript syntax is the set of rules, how JavaScript programs are
            constructed:
          </Text>
          <Box w="900px"></Box>{' '}
        </Box>
        <Divider orientation='horizontal' />
        <Box w="90%" p={10} bg="white" h="150px">
          <Text color="#40a356">// How to create variables:</Text>
          <Text>
            <Highlight query="var" styles={{ px: '1', py: '1', color: 'blue' }}>
              var x;
            </Highlight>
          </Text>
          <Text>
            <Highlight query="var" styles={{ px: '1', py: '1', color: 'blue' }}>
              var y;
            </Highlight>
          </Text>
          <Text color="#40a356" mt="20">
            // How to use variables:
          </Text>
          <Text>
            <Highlight query="5" styles={{ px: '1', py: '1', color: 'red' }}  > x = 5 </Highlight>
          </Text>
          <Text>
            <Highlight query="6" styles={{ px: '1', py: '1', color: 'red' }} > x = 6 </Highlight>
          </Text>
        </Box>
      </VStack>
    </>
  )
}
export default Syntax
