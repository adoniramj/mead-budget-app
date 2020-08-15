import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expense'

const ExpenseListItem = (props) => {
    const { dispatch, description, amount, createdAt, id } = props
    return (
        <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
            <p>{amount} - {createdAt}</p>

        </div>
    );
};

// to use dispatch, connect ExpenseListItem with the store
// without store dispatch cannot be executed.
// Remember dispatch "dispatches" and action object to the store

export default connect()(ExpenseListItem) 
