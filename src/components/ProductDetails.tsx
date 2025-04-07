import { Product } from "../types"
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Form, Link, LoaderFunctionArgs, redirect } from "react-router-dom";
import { deleteProduct, updateAvailability } from "../services/ProductService";

type ProductDetailsProps= {
  product: Product
}

export async function action({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id)
    return redirect('/')
  }
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
