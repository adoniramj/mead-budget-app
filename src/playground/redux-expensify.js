import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'

// action generators
const addExpense = (
    {description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0} = {}) => ({

    type : 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (id) => ({
    type : 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => {
    return {
        type : 'EDIT_EXPENSE',
        id,
        updates
    }
}

const setTextFilter = (text = '') => {
    return {
        type : 'SET_TEXT_FILTER',
        text
    }
}

// FILTER REDUCERS
const sortByDate = () => {
    return {
        type : 'SORT_BY_DATE',
        sortBy : 'date'
    }
}

const sortByAmount = () => {
    return {
        type : 'SORT_BY_AMOUNT',
        sortBy : 'amount'
    }
}

const setStartDate = (startDate) => {
    return {
        type : 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

// initial state parameters
const expensesReducerDefaultState = []

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

// Reducers 
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]   //spread operator
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (id != action.id))
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}


const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text : action.text }
        case 'SORT_BY_DATE':
            return {...state, sortBy : action.sortBy}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy : action.sortBy}
        case 'SET_START_DATE':
            return {...state, startDate : action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate : action.endDate}
        default:
            return state
    }
}

// Store creation
const store = createStore(combineReducers({
    expenses : expensesReducer,
    filters : filterReducer
}))

const getVisibleExpenses = (expenses, { text , sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = (typeof startDate !== 'number') || expense.createdAt >= startDate
        const endDateMatch = (typeof endDate !== 'number') || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        console.log(startDateMatch, endDateMatch, textMatch)
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

store.subscribe(() => {
    const state = store.getState()
    const expenses = state.expenses
    const filters = state.filters
    const result = getVisibleExpenses(expenses, filters)
    console.log(result)
})



//inserting data
const expenseOne = store.dispatch(addExpense({description: 'milk', amount: 0, createdAt : 50}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note :'too expensive', amount : 1000, createdAt : 150}))
store.dispatch(addExpense({description: 'milk', note :'too expensive', amount : 600}))
const expenseThree = store.dispatch(addExpense({description: 'test', note :'too expensive', amount : 1001 , createdAt : 125}))

// const idTwo = expenseTwo.expense.id
// const idThree = expenseThree.expense.id

// store.dispatch(removeExpense(idThree))

//store.dispatch(setTextFilter('milk'))

store.dispatch(sortByAmount())
store.dispatch(sortByDate())
//store.dispatch(setStartDate(50))
//store.dispatch(setEndDate(110))
//store.dispatch(editExpense(idTwo, { description : 'fruits'}))



// console.log(store.getState())
// const expenses = store.getState().expenses
// const filters = store.getState().filters
// console.log(expenses, filters)

// const result = getVisibleExpenses(expenses, filters)
// console.log(result)