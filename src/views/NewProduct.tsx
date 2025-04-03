import { Form, Link } from "react-router-dom";

export function NewProduct() {
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
      <Form
        className="mt-10" 
        method="POST"     
      >

        <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="name"
            >Nombre Producto:</label>
            <input 
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              name="name"
            />
        </div>
        <div className="mb-4">
            <label
              className="text-gray-800"
              htmlFor="price"
            >Precio:</label>
            <input 
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio Producto. ej. 200, 300"
              name="price"
            />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </div>
  )
}
