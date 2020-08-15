// This functions filters the expenses array (state) and returns a filtered array.
// The filters come from filters (state)
import moment from 'moment'
export const getVisibleExpenses = (expenses, { text , sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}