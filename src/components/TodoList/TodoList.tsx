import React, { PropsWithChildren } from 'react'
import { Todo } from '../../types/Todo.interface'
import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.css'

interface TodoListProps {
   todos: Todo[],
   setCompleted: (id: string) => void
   setUncompleted: (id: string) => void
   removeTodo: (id: string) => void
}

const TodoList: React.FC<PropsWithChildren<TodoListProps>> = ({ todos, setCompleted, setUncompleted, removeTodo }) => {
   return (
      <div className={s.list_cont}>
         {todos.length > 0
            ? <ul className={s.list}>
               {todos.map((td) => (
                  <TodoItem
                     {...td}
                     key={td.id}
                     removeTodo={removeTodo}
                     setCompleted={setCompleted}
                     setUncompleted={setUncompleted}
                  />
               ))}
            </ul>
            : <div className={s.empty}>
               No todos
            </div>}
      </div>
   )
}

export default TodoList;