import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Home, ContactUs, Services, Works, Career, Policy, About } from "./components/index.js"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HelmetProvider } from 'react-helmet-async';
import ProductsPage from './Page/Products.jsx';

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
  <GoogleOAuthProvider clientId='753089874776-2l6fh7dn97p4ocp2f31cn06pkk5qq61q.apps.googleusercontent.com'>
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </GoogleOAuthProvider>
)
