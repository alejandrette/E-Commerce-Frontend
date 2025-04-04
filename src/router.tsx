import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Products } from "./views/Products";
import { NewProduct, action as newProductAction } from "./views/NewProduct";
import { loader as productsLoader } from "./views/Products";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Products />,
        loader: productsLoader
      },
      {
        path: '/newProduct',
        element: <NewProduct />,
        action: newProductAction
      }
    ]
  }
])