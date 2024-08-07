import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom'
import CleanServiceProviderContext from './components/ServicesProvider.jsx'
import store from './app/store.js'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from './components/ToastContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CleanServiceProviderContext>
        <BrowserRouter>
            <Provider store={store}>
                <ToastProvider>
                    <App />
                </ToastProvider>
            </Provider>
        </BrowserRouter>
    </CleanServiceProviderContext>
)
