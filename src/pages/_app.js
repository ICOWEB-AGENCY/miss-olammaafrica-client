import "../styles/globals.css";
import store from "../redux/config.store";
import { Provider } from "react-redux";
import { wrapper } from "../redux/config.store";
import React from 'react'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
      method: 'GET', // or 'PUT'
      headers: {
          "Accept": "application/json",
          "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
          "user-email": "egileoniso.ekada@gmail.com"
      }
    })
    .then(response => response.json())
    .then(data => {   
        localStorage.setItem('country-token', data.auth_token)
    })
    .catch((error) => {
        console.error('Error:', error); 
    });
  },)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
