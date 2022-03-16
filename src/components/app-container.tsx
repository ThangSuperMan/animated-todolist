import React from 'react'
import { NativeBaseProvider, Box } from 'native-base'

interface Props {
  children: React.ReactNode
}

const AppContainer = (props: Props) => {
  const { children } = props

  return (
    <NativeBaseProvider>
      <Box
        flex='1'
        p={7}
        _dark={{ bg: 'black' }}
        _light={{ bg: 'white' }}
        justifyContent='center'
        alignItems='center'
      >
        {children}
      </Box>
    </NativeBaseProvider>
  )
}

export default AppContainer
