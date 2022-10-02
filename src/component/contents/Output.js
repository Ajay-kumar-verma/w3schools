import { Stack, HStack, VStack, Box, Flex, Spacer } from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';

const Output = () => {
  

  return (
    <>
    <VStack bg='white'  w='100%' h="300px" >
        <hr/>
     <Box><Text fontSize={20} color="black" >JavaScript Display Possibilities</Text></Box>
     <Box mt={10} ><Text>JavaScript can "display" data in different ways:</Text></Box>
   
     <UnorderedList>
  <ListItem>Writing into an HTML element, <Text color="red">using innerHTML</Text>.</ListItem>
  <ListItem>Writing into the HTML output using <Text color="red">document.write().</Text></ListItem>
  <ListItem>Writing into an alert box, using <Text color="red">window.alert()</Text>.</ListItem>
  <ListItem>Writing into the browser console, using <Text color="red">console.log()</Text></ListItem>
</UnorderedList>
    
   
    </VStack>


    </>
    )

  }
export default Output;