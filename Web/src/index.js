import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import '../src/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover limit={1} />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

reportWebVitals();
