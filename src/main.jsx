import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Home, ContactUs, Services, Works, Career, Policy, About } from "./components/index.js"

import { HelmetProvider } from 'react-helmet-async';
import ProductsPage from './Page/Products.jsx';
import { ToastProvider } from './context/toastContext.jsx';
import { Provider } from 'react-redux';
import {store} from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='career' element={<Career />} />
      <Route path='works' element={<Works />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='policy' element={<Policy />} />
      <Route path='about' element={<About />} />
      <Route path="products" element={<ProductsPage/>}/>
    </Route>
  )
)
// const clientId=import.meta.env.GOOGLE_CLIENT_ID
createRoot(document.getElementById('root')).render(
<Provider store={store}>
<ToastProvider>
    <HelmetProvider>

      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
    </ToastProvider>
    </Provider>

)
