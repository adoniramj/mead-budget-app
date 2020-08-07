import React from 'react';
import { connect } from 'react-redux'
import {getVisibleExpenses} from '../selectors/expenses'
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
        expenses : getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)  //hoc
