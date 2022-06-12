import React, { PropsWithChildren } from 'react'
import { Todo } from '../../types/Todo.interface';
import s from './TodoItem.module.css'
import { MdCheck, MdClose } from 'react-icons/md'
import cn from 'classnames'

interface TodoItemProps extends Todo {
   setCompleted: (id: string) => void
   setUncompleted: (id: string) => void,
   removeTodo: (id: string) => void
}

const TodoItem: React.FC<PropsWithChildren<TodoItemProps>> = ({ value, status, id, removeTodo, setCompleted, setUncompleted }) => {

   const handleComplete = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      if (status === 'ACTIVE') {
         setCompleted(id)
      } else {
         setUncompleted(id)
      }
   }

   const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      removeTodo(id)
   }

   return (
      <article className={`${s.todo} ${cn({
         [s.disabled]: status === 'FULLFILLED'
      })}`}
         onClick={handleComplete}
      >
         <div className={s.todo_item}>
            <div className={s.todo_body}>
               <div className={s.check}>
                  {status === 'FULLFILLED'
                     ? <MdCheck className={s.icon} />
                     : null}
               </div>
               <p className={s.value}>
                  {value}
               </p>
            </div>
            <button className={s.remove} onClick={handleDelete}>
               <MdClose />
            </button>
         </div>
      </article>
   )
}

export default TodoItem;