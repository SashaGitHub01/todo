import React, { PropsWithChildren } from 'react'
import TodoContainer from '../TodoContainer/TodoContainer';
import s from './Layout.module.css'

interface LayoutProps { }

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
   return (
      <div className={s.layout}>
         <main className={s.main}>
            <div>
               <h1 className={s.title}>
                  todos
               </h1>
            </div>
            <section className={s.content}>
               <TodoContainer />
            </section>
         </main>
      </div>
   )
}

export default Layout;