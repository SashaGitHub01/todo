import classNames from 'classnames'
import React, { PropsWithChildren, useEffect } from 'react'
import { useState } from 'react'
import { SortTypes, Todo } from '../../types/Todo.interface'
import s from './TodoFooter.module.css'

interface TodoFooterProps {
   applySort: (sort: SortTypes) => void,
   sort: SortTypes,
   handleClear: () => void,
   todos: Todo[]
}

const TodoFooter: React.FC<PropsWithChildren<TodoFooterProps>> = ({ applySort, sort, todos, handleClear }) => {
   const [activeLength, setActiveLength] = useState<number>(0)

   useEffect(() => {
      const act = todos.filter(td => td.status === 'ACTIVE').length
      setActiveLength(act)
   }, [todos])

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      applySort((e.target as any).value)
   }

   return (
      <footer className={s.footer}>
         <div className={s.footer_row}>
            <div className="">
               {activeLength} items left
            </div>
            <nav className={s.btn_group}>
               <button
                  value={'all'}
                  className={`${s.btn} ${classNames({
                     [s.active]: sort === 'all'
                  })}`}
                  onClick={handleClick}
               >
                  All
               </button>
               <button
                  value={'active'}
                  className={`${s.btn} ${classNames({
                     [s.active]: sort === 'active'
                  })}`}
                  onClick={handleClick}
               >
                  Active
               </button>
               <button
                  value={'fullfiled'}
                  className={`${s.btn} ${classNames({
                     [s.active]: sort === 'fullfiled'
                  })}`}
                  onClick={handleClick}
               >
                  Completed
               </button>
            </nav>
            <button className={s.clear} onClick={handleClear}>
               Clear all
            </button>
         </div>
      </footer>
   )
}

export default TodoFooter;