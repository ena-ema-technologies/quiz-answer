import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './routes/Router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Auth from './Auth/Auth.jsx';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='overflow-hidden'>
   <React.StrictMode>
  <Auth>
  <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
   </QueryClientProvider>
  </Auth>
  </React.StrictMode>
 </div>
)
