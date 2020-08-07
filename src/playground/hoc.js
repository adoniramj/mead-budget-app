import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info: do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.authentication ? (
                <div>
                <p>User authenticated</p>
                <WrappedComponent  {...props}/>
            </div> 
            ) : (
                <div>
                <p>User not authenticated</p>
            </div>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthenticationInfo = requireAuthentication(Info)

ReactDOM.render(<AuthenticationInfo authentication={false} info='these are the details.'/>, document.getElementById('app'))