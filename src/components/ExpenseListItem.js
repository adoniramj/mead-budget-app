import React from 'react';
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expense'

const ExpenseListItem = (props) => {
    console.log(props)
    const { dispatch, description, amount, createdAt, id } = props
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button 
                onClick={() => {dispatch(removeExpense(id))}}>
            Remove
            </button>
        </div>
    );
};

// to use dispatch, connect ExpenseListItem with the store
// without store dispatch cannot be executed.
// Remember dispatch "dispatches" and action object to the store

export default connect()(ExpenseListItem) 
