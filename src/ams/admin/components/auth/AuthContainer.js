import React from 'react';
import { Image, Badge, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import icon from '../../../../assets/wave.svg'
import { Box, Text } from '@chakra-ui/layout'
import { FiEye } from 'react-icons/fi'



const AuthContainer = () => {
  return (
    <Box p={6}>
        <Image src={icon}/>
        <Text fontSize={23} mt={15} mb={5} fontWeight="bold" color="black">Hi Patience</Text>
        <Badge px={12} py={5} variant="outline" border="0.34px solid #cccccc" borderRadius="6px">patience.admin@semicolon.africa</Badge>
    <Box mt={13}>
        <Text fontSize={14} m={0} color="#595959">Welcome to the Attendance Management </Text>
        <Text fontSize={14} m={0} mt={2} color="#595959">Create a Password to Complete Your Registration </Text>
    </Box>
    <FormControl mt="2rem">
        <FormLabel htmlFor='password'>Password</FormLabel>
        <InputGroup>
            <Input _focusVisible={{outline: "#6E7391 auto 1px"}} px={12} id='password' type='password' borderRadius='8px' height='40px' width="100%" border="0.34px solid #cccccc" mt="4px"/>
            <InputRightElement children={<FiEye height="50px" width="25px" color="#cccccc"/>} mt={19} mr={10} />
        </InputGroup>
        <Text mt={1} color="#6E7391" fontSize="10px">
            Upto 8 characters with an Uppercase, symbol and number
        </Text>
    </FormControl>
     
    </Box>);
};

export default AuthContainer;
