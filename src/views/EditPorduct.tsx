import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { getProductById, putProduct } from "../services/ProductService";
import { Product } from "../types";

export async function loader({ params }: LoaderFunctionArgs) {
  if(params.id !== undefined) {
    const product = getProductById(+params.id)
    return product
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())

  let error = ''
  if (Object.values(data).includes("")) {
    error = "The field is Empty"
  }
  if (error.length) {
    return error
  }

  if(params.id !== undefined) {
    await putProduct(data, +params.id)
    return redirect('/')
  }  
}

export function EditProduct() {
  const error = useActionData<string>()
  const product = useLoaderData<Product>()

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg shadow-indigo-600/50">
      <div className="flex flex-wrap justify-between">
        <div>
          <h1 className="text-3xl text-zinc-400 font-semibold">Edit Product</h1>
        </div>
        <div>
          <Link to={'/'}>
            <button className="bg-indigo-600 hover:bg-indigo-500 p-2 font-semibold rounded-lg">View Product</button>
          </Link>
        </div>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form
        className="mt-10 text-gray-800" 
        method="POST"     
      >

        <div className="mb-4">
            <label
              className="text-gray-50"
              htmlFor="name"
            >Name Product:</label>
            <input 
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Name Product"
              name="name"
              defaultValue={product.name}
            />
        </div>
        <div className="mb-4">
            <label
              className="text-gray-50"
              htmlFor="price"
            >Price:</label>
            <input 
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio Producto. ej. 200, 300"
              name="price"
              defaultValue={product.price}
            />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Update Product"
        />
      </Form>
    </div>
  )
}
