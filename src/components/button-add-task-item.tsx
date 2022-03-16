import React from 'react'
import { Pressable } from 'react-native'
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign'
import { Box, useColorModeValue } from 'native-base'
import colors from '../../styles/colors'

interface Props {
  handleAddNewTaskItem?: () => void
}

const ButtonAddTaskItem = (props: Props) => {
  const { handleAddNewTaskItem } = props

  console.log('button add task item is rendering')

  return (
    <Pressable onPress={handleAddNewTaskItem}>
      <Box
        bg={colors.highlightColor}
        w={45}
        h={45}
        my={3}
        borderRadius='full'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
      >
        <Icon name='plus' size={15} color={useColorModeValue("#ffffff", '#ffffff')} />
      </Box>
    </Pressable>
  )
}

export default React.memo(ButtonAddTaskItem)
