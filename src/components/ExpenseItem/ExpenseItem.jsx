import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../Card/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickedAlert = () => {
        setTitle('Another Expense')
        console.log(`Ajoke clicked on this button!!`)
    }

    return (
        <Card className='expense-item'>
            <div className='expense-item_description'>
                <h2>{title}</h2>
                <h4>${props.amount}</h4>
                <button onClick={ clickedAlert}>Change Title</button>
            </div>
        </Card>
    );
}



export default ExpenseItem