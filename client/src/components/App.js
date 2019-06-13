import "./App.css";
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import TodoCreate from "./todos/TodoCreate";
import TodoDelete from "./todos/TodoDelete";
import TodoEdit from "./todos/TodoEdit";
import TodoList from "./todos/TodoList";
import Header from "./Header";
import history from "../history";


const App = () => {
    return (
      <div className="ui raised very padded text container segment">
        <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={TodoList} />
          <Route path="/todos/new" exact component={TodoCreate} />
          <Route path="/todos/edit/:id" exact component={TodoEdit} />
          <Route path="/todos/delete/:id" exact exact component={TodoDelete}  />
        </div>
        </Router>
      </div>
    );
  };
  
  export default App;
  