import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router';
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";


function App() {
    return (
        <div className="App">
            <div className="App-header">
                <nav>
                    <Link className="tab" to="/add-user">Create</Link>
                    <label className="navSeperator">|</label>
                    <Link className="tab" to="/">View</Link>
                </nav>
                <Switch>
                    <Route path="/" exact component={ListUserComponent} />
                    <Route path="/users" component={ListUserComponent} />
                    <Route path="/add-user" component={AddUserComponent} />
                    <Route path="/edit-user" component={EditUserComponent} />
                </Switch>

            </div>
        </div>
    );
}

export default App;
