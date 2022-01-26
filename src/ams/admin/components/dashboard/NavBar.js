import React, { useState } from 'react';
import { Button, Text} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout'
import { FiGrid, FiUsers, FiSettings } from 'react-icons/fi'

const NavBar = () => {

    const [tabRoute, setTabRoute] = useState("Overview")

    function setTabIndex(index) {
        setTabRoute(route.name)
    }

    const routes = [
        {
            name: "overview",
            route: "/overview",
            icon: FiGrid
        },
        {
            name: "native",
            route: "/natives",
            icon: FiUsers
        },
        {
            name: "settings",
            route: "/settings",
            icon: FiSettings
        },
    ]

  return (
      
    <Box display="flex" justifyContent="space-around" alignContent="center" bg="white" height="8vh">
        <Text fontSize="16" fontWeight="bold">Attendance.</Text>

        <Box display="flex" justifyContent="space-between" alignItems="center" height="100%">
            {routes.map((route, index) => (<button key="index" onClick={() => setTabIndex(route)} cursor="pointer" p={4} height="100%" bg="white" mr="4rem" color="black" fontSize="14.5px" border="unset" fontWeight={tabRoute === route.name? "bold" : "100"} borderBottom={tabRoute === route.name ? "3px solid black" : "none"} width="100%">{route.name}</button>))}

        </Box>
            <Box>
                <Text fontSize="12px" fontWeight="bold">Hi</Text>
            </Box>
        
    </Box>
  )
};

export default NavBar;
