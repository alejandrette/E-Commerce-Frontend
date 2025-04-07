import { Product } from "../types"
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Form, Link } from "react-router-dom";

type ProductDetailsProps= {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <tr className="border-b">
      <td className="p-3 text-lg text-white">
        {product.id}
      </td>
      <td className="p-3 text-lg text-white">
        {product.name}
      </td>
      <td className="p-3 text-lg text-white">
        {product.price}
      </td>
      <td className="p-3 text-lg text-white ">
      <Form method="post" action={`products/${product.id}/toggle`}>
        <button
          className={`w-[100px] px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
            ${product.availability 
              ? 'bg-green-400 text-green-950 hover:bg-green-500' 
              : 'bg-red-400 text-red-950 hover:bg-red-500'}`}
        >
          {product.availability ? 'Available' : 'Unavailable'}
        </button>
      </Form>
      </td>
      <td className="p-3 text-lg text-white ">
        <div className="flex flex-column gap-4">
          <Link to={`products/${product.id}/edit`}><FaEdit className="text-orange-500"/></Link>
          <Form method="post" action={`products/${product.id}/delete`}>
            <button type="submit">
              <FaDeleteLeft className="text-red-500" />
            </button>
          </Form>
        </div>
      </td>
    </tr> 
  )
}
