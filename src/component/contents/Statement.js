import { HStack, VStack, Box } from '@chakra-ui/react';
import { Text, Highlight } from '@chakra-ui/react';

const Statements = () => {
  return (
    <>
      <VStack bg='#dae3dc' w='100%' h="300px" >
        <hr />
        <Box mb={10} ><Text fontSize={20} color="black" >Example</Text><Box w="900px"   ></Box> </Box>
        <Box w="90%" bg="white" h="150px">
          <HStack h="100%" w="100%" >
            <Box h="100%" w="1%" bg="red" ></Box>
            <Box w="99%"  >
              <Text>
                <Highlight query='// Statement 1' styles={{ px: '1', py: '1', color: 'green' }}>
                  let x, y, z;    // Statement 1
                </Highlight>
              </Text>
              <Text>
                <Highlight query='5' styles={{ px: '1', py: '1', color: 'red' }}>
                  x = 5;
                </Highlight>
                <Highlight query='// Statement 2' styles={{ px: '1', py: '1', color: 'green' }}>
                // Statement 2
                </Highlight>
              </Text>
              <Text>
                <Highlight query='6' styles={{ px: '1', py: '1', color: 'red' }}>
                  x = 6;
                </Highlight>
                <Highlight query='// Statement 3' styles={{ px: '1', py: '1', color: 'green' }}>
                        // Statement 3
                </Highlight>
              </Text>
              <Text>
                <Highlight query='// Statement 4' styles={{ px: '1', py: '1', color: 'green' }}>
                  z = x + y;    // Statement 4
                </Highlight>
              </Text>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </>
  )

}
export default Statements;