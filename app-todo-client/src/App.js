import React, {Component} from "react";
import './App.css';
import ProjectBoard from "./components/ProjectBoard";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import UpdateProjectTask from "./components/ProjectTask/UpdateProjectTask";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Route exact path="/" component={ProjectBoard}/>
                    <Route exact path="/addProjectTask" component={AddProjectTask}/>
                    <Route exact path="/updateProjectTask/:id" component={UpdateProjectTask}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
