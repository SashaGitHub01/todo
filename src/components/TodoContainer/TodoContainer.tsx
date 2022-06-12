import React, { PropsWithChildren, useState } from 'react'
import { SortTypes, Todo } from '../../types/Todo.interface';
import s from './TodoContainer.module.css'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoFooter from '../TodoFooter/TodoFooter';
import { useEffect } from 'react';

interface TodoContainerProps { }

const TodoContainer: React.FC<PropsWithChildren<TodoContainerProps>> = ({ }) => {
   const [todos, setTodos] = useState<Todo[]>([])
   const [sort, setSort] = useState<SortTypes>('all')
   const [sorted, setSorted] = useState<Todo[]>([])

   useEffect(() => {
      let afterSort: Todo[] = [];

      if (sort === 'active') {
         afterSort = todos.filter(td => td.status === 'ACTIVE')
      } else if (sort === 'fullfiled') {
         afterSort = todos.filter(td => td.status === 'FULLFILLED')
      } else {
         afterSort = todos
      }
      return setSorted(afterSort)
   }, [sort, todos])

   const createTodo = (todo: Todo) => {
      setTodos(prev => {
         return [
            todo,
            ...prev,
         ]
      })
   }

   const removeTodo = (id: string) => {
      setTodos(prev => {
         return prev.filter(td => td.id !== id)
      })
   }

   const handleComplete = (id: string) => {
      setTodos(prev => {
         return prev.map(td => {
            if (td.id === id) {
               td.status = 'FULLFILLED'
            }
            return td
         })
      })
   }

   const handleUncomplete = (id: string) => {
      setTodos(prev => {
         return prev.map(td => {
            if (td.id === id) {
               td.status = 'ACTIVE'
            }
            return td
         })
      })
   }

   const handleClear = () => {
      setTodos([])
   }

   const applySort = (sort: SortTypes) => {
      setSort(sort)
   }

   return (
      <div className={s.container}>
         <TodoForm createTodo={createTodo} />
         <TodoList
            todos={sorted}
            removeTodo={removeTodo}
            setCompleted={handleComplete}
            setUncompleted={handleUncomplete}
         />
         <TodoFooter
            applySort={applySort}
            sort={sort}
            todos={todos}
            handleClear={handleClear}
         />
      </div>
   )
}

export default TodoContainer;