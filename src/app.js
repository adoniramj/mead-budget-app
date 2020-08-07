import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense} from './actions/expense'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'
import './styles/styles.scss'

const store = configureStore()

store.subscribe(() => {
    //console.log(store.getState())
    const state = store.getState()
    const expenses = state.expenses
    const filters = state.filters
    const result = getVisibleExpenses(expenses, filters)
    console.log(result)
})

store.dispatch(addExpense({ description : 'water bill', amount : 100, createdAt : 123}))
store.dispatch(addExpense({ description : 'gas bill', amount : 500, createdAt : 456}))


store.dispatch(setTextFilter('bill'))

setTimeout(() => {
    store.dispatch(setTextFilter(''))
},3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'))