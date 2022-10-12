import { VStack, Box, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { Text } from "@chakra-ui/react";
import './sideBar.css'
const SideBar = () => {
    const menuList = [
        {
            "JS Tutorial": [
                "JS HOME", "JS Introduction", "JS Where To ", "JS Output", "JS Statements", "JS Syntax", "JS Comment", "JS Variable"
                , "JS Let", "JS Const", "JS Arithmetic", "JS Assignment", "JS Precedence", "JS Datatype", "JS Function ", "JS Objects",
                "JS Events", "JS Strings", "JS String Methods"
            ]
        }
        ,
        {
            "JS Versions": [
                "JS Versions", "JS 2009(ES5)", "JS 2015(ES6) ", "JS 2016", "JS 2017", "JS 2018", "JS 2019", "JS 2020"
                , "JS IE/EDGE", "JS History"
            ]
        }
    ]
    return (<>
        <VStack className="sideBar" >
            {
                menuList.map((obj, i) => {
                    return (<>
                        <Box><Text as="b" >{Object.keys(obj)[0]}</Text></Box>
                        <Box  >
                            {Object.values(obj)[0].map(ele => {
                                return (<>
                                    <a className="a" href={ele} ><Text>{ele}</Text></a>
                                </>)
                            })
                            }
                        </Box>
                    </>)
                })
            }
        </VStack>
    </>)
}


export default SideBar;