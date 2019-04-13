import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return(
        <div>
            Page One <br/>
            <br/>
            <Link to="/pagetwo">Go to PAGETWO</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            Page Two <br/> 
            <button>Click me!!</button> <br/>
            <Link to="/">PageONE</Link>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route path='/' exact component={PageOne}/>
                    <Route path='/pagetwo' component={PageTwo}/>
                </div>
            </Router>
        </div>
    )
}

export default App;