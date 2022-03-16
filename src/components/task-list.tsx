import React, { useState, useCallback, useMemo } from 'react'
import { Box } from 'native-base'
// @ts-ignore
import ButtonAddNewTaskItem from './button-add-task-item'
import TaskItem from './task-item'

type TaskItem = {
  subject: string
}

const TaskList = () => {
  const [listTaskItem, setListTaskItem] = useState<TaskItem[]>([
    { subject: 'eat banana' },
    { subject: 'go to cafe' },
  ])

  console.log('task-list is rendering')


  return (
    <TaskItem subject='subject' />
  )
}

export default TaskList;
