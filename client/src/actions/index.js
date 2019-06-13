import todos from "../apis/todos";
import axios from 'axios'
import history from "../history";
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TODO,
    FETCH_TODOS,
    FETCH_TODO,
    DELETE_TODO,
    EDIT_TODO
  } from "./types";

export const fetchTodos = () => async dispatch => {
    console.log("fetchTodos()")
    const response = await todos.get("/todos");
    dispatch({type: FETCH_TODOS, payload: response.data });
    history.push("/");
}

export const createTodo = formValues => async (dispatch, getState) => {
    // const { userId } = getState().auth;
    console.log({...formValues});
    const response = await todos.post("/todos", { ...formValues });
    dispatch({ type: CREATE_TODO, payload: response.data });
    history.push("/");
  };
  
  export const fetchTodo = id => async dispatch => {
      console.log("fetchTodo()")
    const response = await todos.get(`/todos/${id}`);
    dispatch({ type: FETCH_TODO, payload: response.data });
  };
  
  export const editTodo = (id, formValues) => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, formValues);
    dispatch({ type: EDIT_TODO, payload: response.data });
    history.push("/");
  };
  
  export const deleteTodo = id => async dispatch => {
    await todos.delete(`/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
    history.push("/");
  };
  