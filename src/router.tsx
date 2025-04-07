import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Products } from "./views/Products";
import { NewProduct, action as newProductAction } from "./views/NewProduct";
import { loader as productsLoader } from "./views/Products";
import { EditProduct, loader as getProductByIdLoader, action as editProduct } from "./views/EditPorduct";
import { deleteAction, toggleAvailabilityAction } from "./components/ProductDetails";

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
      },
      {
        path: 'products/:id/edit',
        element: <EditProduct />,
        loader: getProductByIdLoader,
        action: editProduct
      },
      {
        path: 'products/:id/delete',
        action: deleteAction,
      },
      {
        path: 'products/:id/toggle',
        action: toggleAvailabilityAction,
      }
    ]
  }
])