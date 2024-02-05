import axios from "axios";
import rateLimit from "axios-rate-limit";

const api = rateLimit(
  axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  { maxRequests: 120, perMilliseconds:  60 * 1000 }
);

export default api;
