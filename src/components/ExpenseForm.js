import React from 'react';
import { connect } from 'react'


class ExpenseForm extends React.Component {
  state = {
    description : '',
    amount : '',
    note : ''
  }

 onDescriptionChange = (e) => {
   const description = e.target.value
   this.setState(() => ({ description }))
 }

  onAmountChange = (e) => {
    const amount = e.target.value
    console.log(amount)
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
    
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
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
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder="add a note"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <button>Submit Expense</button>
      </form>
    
    </div>
    );
  }
}




export default ExpenseForm