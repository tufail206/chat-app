import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import {createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import appRoute from './routes/appRoute'

const router=createBrowserRouter(createRoutesFromElements(appRoute))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<RouterProvider router={router}/>
    </Provider>
   
  </StrictMode>,
)
