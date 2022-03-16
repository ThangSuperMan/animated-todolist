import React, { useState, useMemo } from 'react'
import { Pressable } from 'react-native'
import { Text, Container, Box } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'
import TaskList from '../components/task-list'
import LearnAnimatedCheckbox from '../../animated-checkbox'

type TypeTaskItem = {
  id: number
  subject: string
}

const Main = () => {
  const [listTaskItem, setListTaskItem] = useState([
    {
      id: 1,
      subject: 'go to cafe'
    },
    {
      id: 2,
      subject: 'sleep late at night'
    },
    {
      id: 3,
      subject: 'eat tobocki'
    },
  ])

  const memoListTaskItem = useMemo(() => {
    console.log('memo task item')
    return (
      listTaskItem.map((item, index) => {
        return (
          <TaskItem key={index} subject={item.subject} />
        )
      })
    )
  }, [listTaskItem])

  const addNewTaskItem = () => {
    console.log('add new task item')
    const data: TypeTaskItem = {
      id: 5,
      subject: 'New task item'
    }
    setListTaskItem(prev => [...prev, data])
  }

  return (
    <Container centerContent>
      <Pressable onPress={addNewTaskItem}>
        <Text my={3}>Add new task item</Text>
      </Pressable>
      {
        memoListTaskItem
      }
      <Text my={3}>main screen</Text>
      <ThemeToggle />
    </Container>
  )
}

export default Main
