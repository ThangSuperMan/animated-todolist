import React, { useState, useEffect } from 'react'
import { Box } from 'native-base'
import TaskItem from './task-item'

type TaskItem = {
  id: number
  subject: string
}

const TaskList = React.memo((props: any) => {
  const { data } = props
  const [taskList, setTaskList] = useState<TaskItem[]>([
    { id: 9, subject: 'play with dogs' }
  ])

  useEffect(() => {
    data.forEach((item: TaskItem) => {
      setTaskList(oldData => [...oldData, item])
    })
  }, [data])

  console.log('rendering the task-list')

  return (
    <Box
      w='full'
    >
      {
        taskList.map((item: any, index: number) => {
          return (
            <TaskItem key={index} subject={item.subject} />
          )
        })
      }
    </Box>
  )
})

export default TaskList;
