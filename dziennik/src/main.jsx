import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { NextUIProvider } from '@nextui-org/system';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
