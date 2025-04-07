import { Product } from "../types"
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { updateAvailability } from "../services/ProductService";

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
          <button onClick={() => updateAvailability(product.id)}>{product.availability ? <span>Available</span> : <span>Unavailable</span>}</button>
        </td>
        <td className="p-3 text-lg text-white ">
          <div className="flex flex-column gap-4">
            <Link to={`products/${product.id}/edit`}><FaEdit className="text-orange-500"/></Link>
            <button><FaDeleteLeft className="text-red-500"/></button>
          </div>
        </td>
    </tr> 
  )
}
