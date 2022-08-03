import "../styles/globals.css";
import store from "../redux/config.store";
import { Provider } from "react-redux";
import { ChakraProvider, Spinner } from '@chakra-ui/react'
// import { wrapper } from "../redux/config.store";
import React from 'react'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false)

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
        setLoading(true)
    })
    .catch((error) => {
        console.error('Error:', error); 
    });
  },[loading])

  return (
    <ChakraProvider>
      <Provider store={store}>
        {!loading ? 
          <div className='w-full h-full flex-1 justify-center items-center flex py-6' >
            <div className="my-20" > 
              <Spinner marginTop="20" color="#BC8924" size='xl' />
            </div>
          </div> : 
          <Component {...pageProps} />
        }
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
