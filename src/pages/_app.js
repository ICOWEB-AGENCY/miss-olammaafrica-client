import "../styles/globals.css";
import store from "../redux/config.store";
import { Provider } from "react-redux";
import { wrapper } from "../redux/config.store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
