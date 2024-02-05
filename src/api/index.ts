import axios from "axios";
import rateLimit from "axios-rate-limit";

const api = rateLimit(
  axios.create({
    baseURL: "https://lionfish-app-yf8mx.ondigitalocean.app/proxy/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  { maxRequests: 120, perMilliseconds:  60 * 1000 }
);

export default api;
