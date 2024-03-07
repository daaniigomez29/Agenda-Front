import axios from "axios";

export default axios.create({
  baseURL: "http://agenda2-env.eba-cprmdkvz.us-east-1.elasticbeanstalk.com/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});