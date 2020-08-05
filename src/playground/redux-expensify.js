import { createStore, combineReducers } from 'redux'

const expensesReducerDefaultState = [{
    id: 12345,
    description : 'rent',
    note : 'Additional info',
    amount : 45600,
    createdAt : 0
}]

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expenses : expensesReducer,
    filter : filterReducer
}))

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})
const demoState = {
    expenses : [{
        id: 12345,
        description : 'rent',
        note : 'Additional info',
        amount : 45600,
        createdAt : 0
    }],
    filter : {
        text : 'rent',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
}