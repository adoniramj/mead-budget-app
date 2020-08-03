import React from 'react'

const EditExpensePage = (props) => {
    const id = props.match.params.id
    return (
        <div>
            Editing expense with id {id}
        </div>
    )

}

export default EditExpensePage