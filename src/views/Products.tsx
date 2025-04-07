import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";
import { Product } from "../types";
import { ProductDetails } from "../components/ProductDetails";

export async function loader() {
  const products = await getProducts()

  return products
}

export function Products() {
  const products = useLoaderData<Product[]>()

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg shadow-indigo-600/50">
      <div className="flex flex-wrap justify-between">
        <div>
          <h1 className="text-3xl text-zinc-400 font-semibold">View Products</h1>
        </div>
        <div>
          <Link to={'/newProduct'}>
            <button className="bg-indigo-600 hover:bg-indigo-500 p-2 font-semibold rounded-lg">Create Product</button>
          </Link>
        </div>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Availability</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
