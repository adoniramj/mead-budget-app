import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.notes : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    console.log(amount)
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      const error = 'Description and amount a required fields'
      this.setState(() => ({ error }))
    } else {
      this.setState(() => ({ error: '' }))
      const data = {
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
      }
      this.props.onSubmit(data)
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="description"
            placeholder="description"
            autoFocus
            onChange={this.onDescriptionChange}
            value={this.state.description}
          />
          <input
            type="text"
            name="amount"
            id=""
            placeholder="amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="add a note"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button onClick={this.handleOnSubmit}>Submit Expense</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
        {this.props.test}
      </div>
    )
  }
}

export default ExpenseForm
