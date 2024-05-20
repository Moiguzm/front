import axios from "axios";

// const config = axios.create({
//   baseURL: "https://back-delta-one.vercel.app/",
//   withCredentials: true,
//   headers: {
//     "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualquier origen
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // Métodos permitidos
//     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", // Encabezados permitidos
//   },
// });
const config = axios.create({
  baseURL: "back-eta-blond.vercel.app/",
  withCredentials: true,
});

export default config;
