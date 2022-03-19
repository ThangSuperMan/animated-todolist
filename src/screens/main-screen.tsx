import React, { useState, } from 'react'
import colors from '../../styles/colors'
import { TextInput, StyleSheet, Alert } from 'react-native'
import { Box, Button, HStack, Text } from 'native-base'
import TaskList from '../components/task-list'
import Masthead from '../components/masthead'

type TypeTaskItem = {
  id: number
  subject: string
}

const Main = () => {
  const [listTaskItem, setListTaskItem] = useState<TypeTaskItem[]>([
    {
      id: 1,
      subject: 'sleep early',
    },
    {
      id: 2,
      subject: 'go to park with the dog :)'
    },
  ])

  const [textInput, setTextInput] = useState<string>('');
  const [heightTextInput, setHeightTextInput] = useState(0)

  const handleAddNewTaskItem = () => {
    const data: any = [{
      id: 5,
      subject: textInput
    }]

    console.log(data.subject)
    if (textInput === '') {
      Alert.alert('Error adding the task item', 'The task item can not be empty!')
    } else {
      console.log(data.subject)
      setListTaskItem(data)
    }

    setTextInput('')
  }

  const onLayoutTextInput = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeightTextInput(height)
  }

  //console.log('main screen is rendering')

  return (
    <Box
      w='full'
      h='full'
      alignItems='center'
      justifyContent='center'
      p={5}
    >
      <Masthead />
      <HStack space={2}>
        <TextInput
          onLayout={onLayoutTextInput}
          style={styles.textInput}
          placeholder='Add your task item here...'
          onChangeText={(text) => setTextInput(text)}
          value={textInput}
        />
        <Button
          style={styles.shadowBox}
          onPress={handleAddNewTaskItem}
          height={heightTextInput}
          bg={colors.highlightColor}
        >
          <Text color='white'>Add item</Text>
        </Button>
      </HStack>
      <TaskList data={listTaskItem} />
    </Box >
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 12,
    width: '70%',
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.highlightColor,
    borderRadius: 5,
    padding: 12,
  },
  shadowBox: {
    shadowColor: '#323232',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 1,
  }
})

export default Main
