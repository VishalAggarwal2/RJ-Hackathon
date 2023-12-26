import React from 'react'
import { Box ,Text,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div style={{color:"white",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
      <Text marginTop={"3rem"} fontSize={"2rem"}>
        <Link to="/main"> Logo</Link>
        </Text>
        <Text marginTop={"3rem"} fontSize={"2rem"}>
        <Link to="/home"> Home</Link>
        </Text>
        <Text marginTop={"3rem"} fontSize={"2rem"}>
        <Link to="/home"> Contact Us</Link>
        </Text>
    </div> 
  )
}

export default NavBar
