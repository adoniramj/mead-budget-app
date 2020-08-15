import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
import moment from 'moment'

import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense} from './actions/expense'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'
import './styles/styles.scss'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
    // const state = store.getState()
    // const expenses = state.expenses
    // const filters = state.filters
    // const result = getVisibleExpenses(expenses, filters)
    // console.log(result)
})

// dummy data for initial store setup
store.dispatch(addExpense({ description : 'water bill', amount : 100, createdAt : moment().valueOf()}))
store.dispatch(addExpense({ description : 'gas bill', amount : 500, createdAt : moment().valueOf()}))
store.dispatch(addExpense({ description : 'electric bill', amount : 600, createdAt : moment().valueOf()}))
store.dispatch(addExpense({ description : 'future', amount : 500, createdAt : moment().valueOf()}))

// Providing store to react
const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'))