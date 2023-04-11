import axios from "axios";

//---Setup basic axios config
export default axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  headers: {
    "Content-type": "application/json"
  }
});