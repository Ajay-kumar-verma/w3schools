import { Stack, HStack, VStack, Box, StackDivider, Spacer, Center } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CalendarIcon, Search2Icon, SunIcon, MoonIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import './Header.css';

const Header = () => {
  const headingList = [
    <img src="https://picsum.photos/200/300?random=1" height="70px" width="70px" alt="image hai" />
    , "Tutorials", "References", "Exercises", "Videos", <Box w="200px" > </Box>,
    <Box className='headBox' style={{ background: "#22242A", color: "white" }} >Pro</Box>,
    <Box className='headBox' style={{ background: 'rgb(248, 201, 238)' }}>Get  Certified</Box>,
    <Box className='headBox' style={{ background: "#EED97D" }} >Free Website</Box>,
    <Box className='headBox' style={{ background: "rgb(4, 170, 109)" }} >Login</Box>
  ]
  const topicList = [
    <CalendarIcon color="white" m={10} h={20} w={20} />
    , "HTML", "CSS", "JAVASCRIPT", "SQL", 'PYTHON', "JAVA", "PHP", "BOOTSTRAP", "HOWTO",
    "W3.CSS", "C", "C++"

  ]


  const iconList = [
    <Box w="120px"  ></Box>,
    <MoonIcon color="white" m={10} h={20} w={20} />
    , <SunIcon color="white" m={10} h={20} w={20} />
    , <Search2Icon color="white" m={10} h={20} w={20} />
  ]



  return (
    <>
      <HStack h='80px' bg='#dbe2fa'>
        {headingList.map((ele, i) => {
          if (true) return (<>
            <Box className='topList' ><Text fontSize='25px' >{ele}</Text> </Box>
            {(i > 3 || i == 0) ? null : <TriangleDownIcon />}
            {i > 3 ? <Spacer /> : null}

          </>);

        })
        }

      </HStack>


      <Box className='stcky' w="100%" h="30px" bg="#232924" >
        <HStack w="60%" h="30px"  >
          {topicList.map(element => {
            return (<>
              <Center p={10}

                bg={element == "JAVASCRIPT" ? "green" : null}

                className='menu' h="30px"> {element}</Center>
            </>);

          })
          }

          {iconList.map(element => {
            return (<>
              <Center p={10} className='menu' h="30px" >{element}</Center>

            </>);

          })
          }

        </HStack>


      </Box>



    </>
  );
}

export default Header;
