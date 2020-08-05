import { createStore } from 'redux'

const incrementCount = ({ incrementBy  = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type : 'DECREMENT',
    decrementBy
})

const resetCount = () => ({type : 'RESET'})

const setCount = ( { count } = {}) => ({
    type : 'SET',
    count
})

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count : 0
            }
        case 'SET':   
            return {
                count: action.count
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store)
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy : 999}))


store.dispatch(decrementCount({ decrementBy : 123}))


store.dispatch(setCount({ count : 1001 }))

store.dispatch(resetCount())
