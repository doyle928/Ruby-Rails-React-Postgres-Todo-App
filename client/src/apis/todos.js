import axios from "axios";
console.log("api/todos.js");

export default axios.create({
  baseURL: "/api/v1"
});
