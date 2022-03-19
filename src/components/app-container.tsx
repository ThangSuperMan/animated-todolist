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
        _dark={{ bg: 'black' }}
        _light={{ bg: 'white' }}
        w='full'
        h='full'
        justifyContent='center'
        alignItems='center'
      >
        {children}
      </Box>
    </NativeBaseProvider>
  )
}

export default AppContainer
