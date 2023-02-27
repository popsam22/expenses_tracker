import React from 'react';
import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import Home from './components/Home'
import UserInput from './components/UserInput/UserInput'


const App = () =>  {
  const expenses = [
    {
      id :  'e1',
      title : 'Toilet Paper',
      amount : 10,
      date : new Date(2020-7-14)
    },
    {
      id : 'e2',
      title : 'New phone',
      amount : 900,
      date : new Date(2023-2-12)
    },
    {
      id : 'e3',
      title : 'Transport',
      amount : 15,
      date : new Date(2023-1-10)
    },
    {
      id : 'e4',
      title : 'Rent',
      amount : 300,
      date : new Date(2022-6-17)
    }
  ];


  return (
    <div className="App">
      <h1>Hi, this was created using vite</h1>
      <Home />
      <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}/>
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}/>
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}/>
      <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}/>
      <UserInput />
    </div>
  )
}

export default App
