import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";
import { Product } from "../types";

export async function loader() {
  const products = await getProducts()

  return products
}

export function Products() {
  const products = useLoaderData<Product[]>()

  return (
    <div className="flex flex-wrap justify-between bg-gray-800 p-4 rounded shadow-lg shadow-indigo-600/50">
      <div>
        <h1 className="text-3xl text-zinc-400 font-semibold">View Products</h1>
      </div>
      <div>
        <Link to={'/newProduct'}>
          <button className="bg-indigo-600 hover:bg-indigo-500 p-2 font-semibold rounded-lg">Create Product</button>
        </Link>
      </div>
    </div>
  )
}
