import { useColorMode } from 'native-base'
import React from 'react'
import { Switch, Text, HStack } from 'native-base'

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack space={3} alignItems='center'>
      <Text fontSize={16}>Light</Text>
      <Switch onToggle={toggleColorMode} isChecked={colorMode === 'dark'} />
      <Text fontSize={16}>Dark</Text>
    </HStack>
  )
}

export default ThemeToggle
