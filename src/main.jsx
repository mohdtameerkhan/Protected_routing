import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {approuter} from '/src/Router.jsx'
import './index.css'
import { RouterProvider} from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter}/>
  </StrictMode>,
)

