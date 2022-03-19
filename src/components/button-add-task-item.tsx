import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign'
import { Box, useColorModeValue } from 'native-base'
import colors from '../../styles/colors'

const ButtonAddTaskItem = () => {

  return (
    <Box
      bg={colors.highlightColor}
      w={55}
      h={55}
      borderRadius='full'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Icon name='plus' size={15} color={useColorModeValue("#ffffff", '#ffffff')} />
    </Box>
  )
}

export default React.memo(ButtonAddTaskItem)
