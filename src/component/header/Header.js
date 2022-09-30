import { Stack, HStack, VStack, Box, StackDivider ,Spacer } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CalendarIcon ,Search2Icon,SunIcon,MoonIcon ,TriangleDownIcon} from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import './Header.css';

const Header = () => {
   const headingList=[
     <img src="https://picsum.photos/200/300?random=1"  height="70px" width="70px"  alt="image hai" />
     , "Tutorials", "References","Exercises","Videos",
     <Box className='headBox' style={{background:"#22242A",color:"white"}} >Pro</Box> ,
     <Box className='headBox' style={{background:'rgb(248, 201, 238)'}}>Get  Certified</Box>,
     <Box className='headBox' style={{background: "#EED97D"}} >Free Website</Box> ,
     <Box className='headBox' style={{background:"rgb(4, 170, 109)"}} >Login</Box>
    ]  
  

    const topicList = [
        <CalendarIcon color="white" m={10} h={20} w={20} />
        , "HTML", "CSS", "JAVASCRIPT", "SQL", 'PYTHON', "JAVA", "PHP", "BOOTSTRAP", "HOWTO", "W3.CSS", "C", "C++"
       
    ]


    const iconList = [
        <MoonIcon color="white" m={10} h={20} w={20} />
        , <SunIcon color="white" m={10} h={20} w={20} />
        , <Search2Icon color="white" m={10} h={20} w={20} />
    ]



    return (
        <>
            <VStack divider={<StackDivider borderColor='red' />}
                spacing={1}
                align='stretch'
            >
                <HStack h='80px'    bg='#dbe2fa'>
             
               {headingList.map((ele ,i)=>{
                      // if(i==0) return (<>{ele}</>);
                      if(true) return (<>
                      <Text fontSize='25px' >{ele}</Text>
                      {(i>3 || i==0)?null:<TriangleDownIcon /> }
                       {i>3?<Spacer />:null}
                       
                       </>);
                             
               })
                }
             
                </HStack>


                <Box h='70px' bg='rgb(32, 19, 44)'>

                  {
                    <HStack mt={5}>
                    {topicList.map(element=>{
                       return (<>
                       <Box className='menu' > <Text as='b' fontSize='3xl' >{element}</Text> </Box>
                        <Text ></Text>
                      </>);
 
                    }) 
                    }
              <Spacer /> 
          
              {iconList.map(element=>{
                       return (<>
                        <Text as='b' fontSize='3xl' color="white" >{element}</Text>
                        <Text ></Text>
                      </>);
 
                    }) 
                    }

          
                  </HStack>
                  }

                </Box>




            </VStack>


        </>
    );
}

export default Header;
