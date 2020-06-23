import axios from "axios";

export default axios.create({
  baseURL:
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=&key=AIzaSyCBBOrsUAnFiG8HUcGJepf6hDLEWk1vXac",
  headers: {
    Authorization: "Bearer AIzaSyCBBOrsUAnFiG8HUcGJepf6hDLEWk1vXac",
    Accept: "application/json",
  },
});
