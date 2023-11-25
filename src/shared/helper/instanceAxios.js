import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 15000,
  // headers:{

  // }
});

// instanceAxios.interceptors.request.use(
//   (config) => {
//     return config;
//   },

//   (err) => {
//     console.log("err", err);

//     return err;
//   }
// );
