import { useEffect } from 'react'
import {  HStack, VStack, Box} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Text, Highlight } from '@chakra-ui/react';
import './wt.css';
const WhereTo = () => {
   useEffect(() => {
    const val = localStorage.getItem('ScroolVal');
    window.scrollTo({ top: val, left: 0, behavior: 'smooth' });
  }, []);

  window.addEventListener('scroll', () => {
    const val = window.scrollY;
    localStorage.setItem("ScroolVal", val)
  });

  return (
    <>
      <VStack w='100%' h="1000px" >
        <HStack mb="30px" >
          <Box>
            <Box>
              <Text fontSize={30} > The &lt;script&gt; Tag </Text>
            </Box>
            <Box>
              <Text>In HTML, JavaScript code is inserted between <Highlight query="&lt;script &gt;" styles={{ color: 'red' }} > &lt;script &gt;</Highlight> and <Highlight query='&lt;/script&gt;' styles={{ color: "red" }} > &lt;/script&gt;</Highlight> tags. </Text>
            </Box>
          </Box>
          <Box w="500px"  ></Box>
        </HStack>
        <Box bg="#d7dbd8" h="220px" w="100%" >
          <VStack h="200px" >
            <HStack>
              <Box m="20px" fontSize='30px' ><Text>Example</Text> </Box>
              <Box w="800px" ></Box>
            </HStack  >
            <HStack m={10} bg="white" w="90%" h="80px" >
              <Box w="5px" h="100%" bg="green" ></Box>
              <Box>
                <Box> <Text><Highlight query='&lt;script&gt; ' styles={{ color: "#d15a4f" }} > &lt;script&gt;</Highlight></Text> </Box>
                <Box> <Text><Highlight query='"demo"' styles={{ color: "#d15a4f" }} > document.getElementById &#40;"demo"&#41;.innerHTML = "My First JavaScript";</Highlight></Text> </Box>
                <Box> <Text><Highlight query='&lt;script&gt;' styles={{ color: "#d15a4f" }} > &lt;script&gt;</Highlight></Text> </Box>
              </Box>
            </HStack>
            <Box >
              <HStack>
                <HStack bg='#0e8f17' borderRadius={10} p={10}  >
                  <Box fontSize='20px' color='white'  > Try it Yourself </Box>
                  <ArrowRightIcon fontSize={10} color="white" />
                </HStack>
                <HStack w="700px" borderRadius={10} p={10}  >
                </HStack>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <HStack w="100%" h="150px" bg="#e8d295"  >
          <Box m="50px" w="70%">
            <Text>
              Old JavaScript examples may use a type attribute: &lt;script type="text/javascript"&gt;.
              The type attribute is not required. JavaScript is the default scripting language in HTML.
            </Text>
          </Box>
        </HStack>
        <VStack w="100%" h="150px" bg="white"  >
          <Box m="5px"><Text as="b" fontSize="40px">JavaScript Functions and Events   </Text></Box>
          <Box>
            <Text color="black"  styles={{color:"red"}}  >
              <Highlight query="function"  styles={{color:'red'}}  >
                A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
              </Highlight>
            </Text>
          </Box>
          <Box>
            <Text color="black" >
              <Highlight query="event" styles={{ color: "black", fontWeight: "bold" }} >
                For example, a function can be called when an event occurs, like when the user clicks a button.
              </Highlight>
            </Text>
          </Box>
        </VStack>
        <HStack w="100%" h="150px" bg="#e8d295"  >
          <Box m="50px" w="70%">
            <Text>
              You will learn much more about functions and events in later chapters.   </Text>
          </Box>
        </HStack>
        <VStack w="100%" h="150px" bg="white"  >
          <Text as="b" fontSize="40px" > JavaScript in &lt;head&gt; or &lt;body&gt;  </Text>
          <Text>You can place any number of scripts in an HTML document.</Text>
        </VStack>
      </VStack>
    </>
  )

}
export default WhereTo;