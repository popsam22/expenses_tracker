import React, { useState }from 'react';
import './UserInput.css'

const UserInput = () => {
    const [userTitle, setUserTitle ] = useState('');
    const [userAmount, setUserAmount ] = useState('');
    const [userDate, setUserDate ] = useState('');

    const titleChangeHandler = event => setUserTitle(event.target.value); // collects title entered by user

    const amountChangeHandler = event => setUserAmount(event.target.value); // collects amount entered by user

    const dateChangeHandler = event => setUserDate(event.target.value); // collects date entered by user


    const submitHandler = ( event ) => {
        event.preventDefault(); // prevents page from reloading after submitting form

        // collects users inputs and stores in this object.
        const expenseData = {
            title : userTitle,
            amount : userAmount,
            date : new Date(userDate)
        };
        console.log(expenseData);
        
        // this clears the form after submission
        setUserAmount('');
        setUserDate('');
        setUserTitle('');
    };

     return (
        <div className='userinput__expenses'>
            <form onSubmit={submitHandler}>
                <div className='overall-form__container'>
                    <div className='single-form__container'>
                        <label>Title</label>
                        <input type="text" value={userTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='single-form__container'>
                        <label>Amount</label>
                        <input type="number" step ="1" min="10" value ={userAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='single-form__container'>
                        <label>Date</label>
                        <input type="date" min="2021-01-01" max="2023-12-31" value={userDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='submit-expense'>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default UserInput