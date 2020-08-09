import React from 'react';
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expense'

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => {
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

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}


export default connect(mapStateToProps)(ExpenseListItem)