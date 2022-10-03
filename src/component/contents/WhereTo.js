import { Stack, HStack, VStack, Box, Flex, Spacer  } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
// import { Text ,Highlight } from '@chakra-ui/react';
import { Text, Highlight } from '@chakra-ui/react';

const WhereTo = () => {
  console.log("This is home page ")

 
  return (
    <>
    <VStack   w='100%' h="300px" >
     
   <HStack mb="30px" >
  <Box>
  <Box>
     <Text fontSize={30} > The &lt;script&gt; Tag </Text>
     </Box> 
    <Box>
    <Text>In HTML, JavaScript code is inserted between <Highlight query="&lt;script &gt;" styles={{color:'red'}} > &lt;script &gt;</Highlight> and <Highlight query='&lt;/script&gt;' styles={{color:"red"}} > &lt;/script&gt;</Highlight> tags. </Text>
    </Box>
    
  </Box>
  <Box w="500px"  ></Box>
   </HStack>

   <Box bg="#d7dbd8" h="180px" w="100%" >
    <VStack>
    <HStack>
    <Box m="20px" fontSize='30px' ><Text>Example</Text> </Box>
    <Box w="800px" ></Box>
    </HStack  >
    
    <HStack m={10} bg="white" w="90%" h="80px" >
    <Box w="5px" h="100%" bg="green" ></Box>
    <Box>
     <Box> <Text><Highlight query='&lt;script&gt; '  styles={{color:"#d15a4f"}} > &lt;script&gt;</Highlight></Text> </Box>
     <Box> <Text><Highlight query='"demo"' styles={{color:"#d15a4f"}} > document.getElementById &#40;"demo"&#41;.innerHTML = "My First JavaScript";</Highlight></Text> </Box>
     <Box> <Text><Highlight query='&lt;script&gt;' styles={{color:"#d15a4f"}} > &lt;script&gt;</Highlight></Text> </Box>
     </Box>
    </HStack>

    </VStack>


   </Box>
 



    </VStack>


    </>
    )

  }
export default WhereTo;