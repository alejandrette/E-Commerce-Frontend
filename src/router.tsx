import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Products } from "./views/Products";
import { NewProduct } from "./views/NewProduct";
import { action as newProductAction } from "./logic/newProductAction";
import { loader as productsLoader } from "./logic/ProductsActions";
import { EditProduct } from "./views/EditPorduct";
import { loader as getProductByIdLoader, action as editProduct } from "./logic/EditProductActions";
import { deleteAction, toggleAvailabilityAction } from "./logic/ProductDetailsActions";

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