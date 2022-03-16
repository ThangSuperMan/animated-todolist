import React, { useState, useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box, HStack } from 'native-base'
import AnimatedCheckbox from './animated-checkbox'
import AnimatedTaskLabel from './animated-task-label'

interface Props {
  subject: string
}

const TaskItem = React.memo((props: Props) => {
  const { subject } = props
  const [isDone, setIsDone] = useState(false)

  const handleToggleCheckbox = () => {
    //console.log('handlePressCheckbox')
    setIsDone(prev => !prev)
  }

  console.log('task item is rendering')

  return (
    <HStack
      w={100}
      display='flex'
      flexDir='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box width={30} height={30} mr={2}>
        <Pressable onPress={handleToggleCheckbox}>
          <AnimatedCheckbox checked={isDone} />
        </Pressable>
      </Box>
      <AnimatedTaskLabel subject={'eat something'} textColor='#000000' hightLightTextColor='#A0A09E' checked={isDone} />
    </HStack>
  )
})

//<AnimatedTaskLabel subject={subject} textColor='#000000' hightLightTextColor='#A0A09E' checked={isDone} />
export default TaskItem
