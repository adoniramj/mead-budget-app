import React from 'react';
import { connect } from 'react-redux'
import { getVisibleExpenses } from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense list</h1>
            {props.expenses.map((expense, index) => {
                return (
                    <ExpenseListItem key={index} {...expense} />
                )
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters),
    }
}

// the export default is a hoc
// ExpenseList is the wrapped component
export default connect(mapStateToProps)(ExpenseList)  
