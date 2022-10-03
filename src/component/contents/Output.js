import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { Text, Highlight } from '@chakra-ui/react';

const Output = () => {
  return (
    <>
      <VStack bg='white' w='100%' h="300px" >
        <hr />
        <HStack    >
          <Box>
            <Box><Text fontSize={30} color="black" >JavaScript Display Possibilities</Text></Box>
            <Box m={10} fontSize={20} ><Text>JavaScript can "display" data in different ways:</Text></Box>
            <UnorderedList>
              <ListItem>
                <Text>
                  <Highlight query='innerHTML' styles={{ px: '1', py: '1', color: 'red' }}>
                    Writing into an HTML element, innerHTML.
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  <Highlight query='document.write()' styles={{ px: '1', py: '1', color: 'red' }}>
                    Writing into the HTML output using document.write().
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  <Highlight query='using window.alert()' styles={{ px: '1', py: '1', color: 'red' }}>
                    Writing into an alert box, using window.alert()  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  <Highlight query='console.log()' styles={{ px: '1', py: '1', color: 'red' }}>
                    Writing into the browser console, using
                    console.log()
                  </Highlight>
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box w="500px" mr="4000px"></Box>
        </HStack>
      </VStack>
    </>
  )
}
export default Output;