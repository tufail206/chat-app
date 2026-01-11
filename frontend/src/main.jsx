import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import {createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import appRoute from './routes/appRoute'
import { Toaster } from "react-hot-toast";

const router=createBrowserRouter(createRoutesFromElements(appRoute))
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-center"/>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
