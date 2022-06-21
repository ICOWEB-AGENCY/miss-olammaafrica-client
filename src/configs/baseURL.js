export default process.env.NODE_ENV === "production"
  ? "https://miss-olamma-api.herokuapp.com"
  : "http://localhost:5000";
