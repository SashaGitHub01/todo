import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

test('render h1 in app', async () => {
   render(<App />)
   const head = screen.getByTestId('head')
   expect(head).toBeInTheDocument()
})

test('create new todo', async () => {
   render(<App />)
   const form = screen.getByTestId('todo-form')
   const input = screen.getByTestId('todo-input')
   expect(input).toBeInTheDocument()
   userEvent.type(input, 'create test todo')
   fireEvent.submit(form)
   const todo = screen.getByText(/create test todo/i)
   expect(todo).toBeInTheDocument()
})

test('delete todo', async () => {
   render(<App />)
   const form = screen.getByTestId('todo-form')
   const input = screen.getByTestId('todo-input')

   userEvent.type(input, 'create test todo')
   fireEvent.submit(form)
   const todo = screen.getByText(/create test todo/i)
   expect(todo).toBeInTheDocument()

   const btn = screen.getByTestId('deleteBtn')
   userEvent.click(btn)

   const afterDel = screen.queryByText(/create test todo/i)
   expect(afterDel).toBeNull()
})