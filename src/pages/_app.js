/* eslint-disable react-hooks/exhaustive-deps */
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../store";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
  const { store, persistor } = useStore();
  return (
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
              </PersistGate>
          </Provider>
        
  );
}

export default App;