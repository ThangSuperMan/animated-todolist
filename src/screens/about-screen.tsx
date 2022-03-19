import React from 'react'
import { Box, Text } from 'native-base'
import ThemeToggle from '../components/theme-toggle'

const About = () => {
  return (
    <Box
      w='full'
      h='full'
      //bg='pink.200'
      alignItems='center'
      justifyContent='center'
    >
      <ThemeToggle />
      <Text>about screen</Text>
    </Box>
  )
}

export default About
