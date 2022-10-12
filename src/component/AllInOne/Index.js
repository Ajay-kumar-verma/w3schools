import React from 'react'
import { Box, Center, Circle, Square, Flex, Spacer, ButtonGroup, Button, Heading,Grid,GridItem ,
  SimpleGrid, VStack, StackDivider,
  Stack ,
Checkbox,
HStack

} from '@chakra-ui/react'



import { Gi3DGlasses,Gi3DHammer,Gi3DMeeple,Gi3DStairs,GiAbstract024,
  GiAchillesHeel,GiAlarmClock,GiAngelWings

} from "react-icons/gi";



import { Badge,Code } from '@chakra-ui/react'


import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'


import { MdSettings ,MdCheckCircle } from 'react-icons/md'

import { useToast } from '@chakra-ui/react'


const Index = () => {
  
  return (
    <>
    <Flex>
    <Box w="20%" h="100px" bg="tomato" >  This is box   </Box>
      <Center w="20%" h="100px" bg="tomato"  >This is center  </Center>
      <Circle size="100" bg="green" >   circle  </Circle>
      <Square size="100" bg="yellow" >  Square</Square>
      <Box w="20%" h="50px" bg="tomato" as="button" >  this is button    </Box>
    </Flex>

  <br/>
  <br/>
  <br/>

      <Flex>
        <Box w="30%" h="100px" bg="tomato" > Box </Box>
        <Spacer />
        <Center w="30%" h="100px" bg="pink" >Center </Center>
        <Spacer />
        <Square size="100px" bg="purple" >Square </Square>
        <Spacer />
        <Circle size="100px" bg="yellow" >circle </Circle>
      </Flex>
     <br />
     <br />
     <br />

    <hr/>
      <Flex>
        <Center>
          <Heading>Ajay kumar verma
          </Heading>

        </Center>

        <Spacer />

        <ButtonGroup gap="2" >
          <Button bg='teal' h="30px" w="120px" >  Sign up </Button>
          <Button bg='teal' h="30px" w="120px" > Sign In </Button>
        </ButtonGroup>
      </Flex>

      <hr />
      <br />
      <br />
      <hr />
      GRID
      <hr />
 <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='50' bg='blue' />
  <GridItem w='100%' h='50' bg='brown' />
  <GridItem w='100%' h='50' bg='blue' />
  <GridItem w='100%' h='50' bg='yellow' />
  <GridItem w='100%' h='50' bg='blue' /> 
  <GridItem w='50%' h='50' bg='pink' />
  <GridItem w='50%' h='50' bg='blue' /> 
  
 </Grid>
      <hr />  <br /> <hr />
      GRID
      <hr />
 
   <Grid   
   h='200px'
   w="50%"

  templateRows='repeat(2, 1fr)' // we are splitting whole doc into 2 rows 
  templateColumns='repeat(5, 1fr)' //  we are splitting whole doc into 5 cols 
  gap={4}
>
  <GridItem rowSpan={2} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='pink' />
  <GridItem colStart={2} colEnd={3} bg='green' />
  <GridItem colStart={3} colEnd={6} bg='tomato' />

</Grid>
 
 Responsive
 <hr />


<SimpleGrid  minChildWidth='120px' spacing='40px'  >

<Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>

  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>




</SimpleGrid>


<VStack
  divider={<StackDivider borderColor='red' />}
  spacing={10}
  align='stretch'
>
  <Box h='40px' bg='blue'>
    1
  </Box>
  <Box h='40px' bg='blue'>
    2
  </Box>
  <Box h='40px' bg='blue'>
    3
  </Box>
</VStack>


 Form :- Button

 <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='facebook' variant='solid'>
    Button
  </Button>
  <Button colorScheme='facebook' variant='outline'>
    Button
  </Button>
  <Button colorScheme='facebook' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='facebook' variant='link'>
    Button
  </Button>
</Stack> 

<Stack direction='row' spacing={4}>
  <Button leftIcon={"<EmailIcon />"} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={"<ArrowForwardIcon />"} colorScheme='teal' variant='outline'>
    Call us
  </Button>
</Stack>




<Stack spacing={5} direction='row'>
  <Checkbox bg='red' defaultChecked>
    Checkbox
  </Checkbox>
  <Checkbox bg='green' defaultChecked>
    Checkbox
  </Checkbox>
</Stack>

<br/>
<hr />
Icons 
 <hr/>

 <Gi3DGlasses /> <Gi3DHammer /> <Gi3DMeeple />
 <Gi3DStairs /> <GiAbstract024 />
  <GiAchillesHeel />
  <GiAlarmClock /> <GiAngelWings />

  <br/>
  <br/>
  
 <hr/>
 Data :- Display 
  Badge
 <hr/>
  <br/>

 <Stack direction='row'>
  <Badge variant='outline' colorScheme='green'>
    Default
  </Badge>
  <Badge variant='solid' colorScheme='green'>
    Success
  </Badge>
  <Badge variant='subtle' colorScheme='green'>
    Removed
  </Badge>
</Stack>

<Stack direction='column'>
  <Code children='console.log(welcome)' />
  <hr/>
  <Code colorScheme='red' children="var chakra = 'awesome!'" />
   <hr/>
  <Code colorScheme='yellow' children='npm install chakra' />
</Stack>

 <hr/>
 <hr/>

 <HStack>
 <UnorderedList m="100px" w="50%" >
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>


<OrderedList m="100px" w="50%"  >
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>



 </HStack>


<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={MdSettings} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>

<hr>
</hr>

    </>

  )
}


export default Index