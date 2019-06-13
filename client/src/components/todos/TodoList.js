import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "./../../actions";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderAdmin(todo) {
    return (
      <div className="right floated content">
        <Link to={`/todos/edit/${todo.id}`}>
          <i className="large middle aligned icon edit" />
        </Link>
        <Link to={`/todos/delete/${todo.id}`}>
          <i className="large middle aligned negative icon trash" />
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <div className="item" key={todo.id}>
          {this.renderAdmin(todo)}
          <i className="large middle aligned icon check" />
          <div className="content">{todo.title}</div>
        </div>
      );
    });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/todos/new" className="ui button">
          Add Todo
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos)
    // currentUserId: state.auth.userId,
    // isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
