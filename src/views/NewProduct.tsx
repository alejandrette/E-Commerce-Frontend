import { Form, Link, useActionData } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";

export function NewProduct() {
  const error = useActionData() as string

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg shadow-indigo-600/50">
      <div className="flex flex-wrap justify-between">
        <div>
          <h1 className="text-3xl text-zinc-400 font-semibold">Register Product</h1>
        </div>
        <div>
          <Link to={'/'}>
            <button className="bg-indigo-600 hover:bg-indigo-500 p-2 font-semibold rounded-lg">View Product</button>
          </Link>
        </div>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form
        className="mt-10" 
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
              className="mt-2 block w-full p-3 bg-gray-50 text-gray-800"
              placeholder="Name Product"
              name="name"
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
              className="mt-2 block w-full p-3 bg-gray-50 text-gray-800"
              placeholder="Precio Producto. ej. 200, 300"
              name="price"
            />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Product Logger"
        />
      </Form>
    </div>
  )
}
