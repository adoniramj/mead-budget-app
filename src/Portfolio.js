import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const Header =() => (
    <div>
        <h1>Porfolio</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Welcome page</NavLink>
        <NavLink to='/portfolio' activeClassName='is-active'>Portfolio</NavLink>
        <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
    </div>
)

const Welcome = () => (
    <div>
        <h1>Welcome to my site</h1>
        <p>Take a look around</p>
    </div>
)

const Portfolio = (props) => {
    return (
    <div>
        <h1>Want to see my projects</h1>
        <p>Here is a list of projects</p>
        <Link to='/portfolio/1'>Item 1</Link>
        <Link to='/portfolio/2'>Item 2</Link>
    </div>
    )
}

const PortfolioItem = (props) => {
    
    return (
    <div>
        <h1>Specific project</h1>
        <p>Your are looking at project {props.match.params.id}</p>
    </div>
    )
}

const Contact = () => (
    <div>
        <h1>For information</h1>
    </div>
)

const PageNotFound = () => (
    <div>
        <h1>Page not found</h1>
    </div>
)
const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Welcome} exact={true} />
                <Route path='/portfolio' component={Portfolio} exact={true} />
                <Route path='/portfolio/:id' component={PortfolioItem} />
                <Route path='/contact' component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('app'))