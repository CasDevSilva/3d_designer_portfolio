import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import { colors } from '../lib/colors';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Flex
            justifyContent="space-between"
            background={colors.dark}
            color={colors.light}
            p={[".5rem 1rem", "1rem", "1rem","1rem 20rem"]}
            width="100%"
        >
            <Heading
                as="h2"
                size={["md", "md", "xl", "xl"]}
            // border="1px solid red"
            width="80%"
            >Diseñador de Interiores 3D</Heading>
            <Flex
                justifyContent="center"
                alignItems="center"
                gap="10%"
                // border="1px solid red"
                width="20%"
            >
                <Box fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}><Link to=""><FaLinkedin/></Link></Box>
                <Box fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}><Link to=""><FaInstagram/></Link></Box>
            </Flex>
        </Flex>
    )
}

export default Footer;