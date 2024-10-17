import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:5500/api/",
  baseURL: "https://evangadi-forum-cdsb.onrender.com/api/",

});
export default instance;
