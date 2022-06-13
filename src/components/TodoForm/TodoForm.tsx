import React, { ChangeEvent, FormEvent, PropsWithChildren, useState } from 'react'
import s from './TodoForm.module.css'
import { MdSend as SendIcon } from 'react-icons/md'
import { Todo } from '../../types/Todo.interface'
import { nanoid } from 'nanoid'
import cn from 'classnames'

interface TodoFormProps {
   createTodo: (todo: Todo) => void
}

const TodoForm: React.FC<PropsWithChildren<TodoFormProps>> = ({ createTodo }) => {
   const [value, setValue] = useState<string>('')

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (value.length === 0) return;

      const todo: Todo = {
         value,
         status: 'ACTIVE',
         id: nanoid(12)
      }

      createTodo(todo)
      setValue('')
   }

   return (
      <form onSubmit={handleSubmit} className={s.form} data-testid='todo-form'>
         <label className={s.input_cont}>
            <input
               data-testid='todo-input'
               type={'text'}
               value={value}
               placeholder='Add new todo...'
               onChange={handleChange}
            />
            <button className={`${s.submit} ${cn({
               [s.active]: !!value
            })}`}>
               <SendIcon className={s.icon} />
            </button>
         </label>
      </form>
   )
}

export default TodoForm;