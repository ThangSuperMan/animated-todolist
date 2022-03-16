import React, { useEffect, useState } from 'react'
import { Box, Text, Button } from 'native-base'
import { Pressable } from 'react-native'

const UseEffect = () => {
  const [title, setTitle] = useState('title1')
  const [checked, setChecked] = useState<boolean>(false)

  const handlePressButtonChangeTitle = () => {
    console.log('handlePressButtonChangeTitle')
    setTitle(title === 'title1' ? 'title2' : 'title1')
  }

  const handlePressButtonChangeChecked = () => {
    setChecked(prev => !prev)
  }

  useEffect(() => {
    console.log('useEffect')
  }, [checked])

  console.log('Use effect is rendering')
  return (
    <Box my={3}>
      <Box bg='blue.300' w={100} h={100} my={3}>
        <Text textAlign='center'>use effect</Text>
      </Box>
      <Pressable onPress={handlePressButtonChangeTitle}>
        <Text textAlign='center'>change title</Text>
      </Pressable>
      <Pressable onPress={handlePressButtonChangeChecked}>
        <Text textAlign='center'>change checked</Text>
      </Pressable>
    </Box>
  )
}

export default UseEffect
