import { Product } from "../types"

type ProductDetailsProps= {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  console.log(product)
  return (
    <tr className="border-b ">
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
          {product.availability ? <span>Available</span> : <span>Unavailable</span>}
        </td>
        <td className="p-3 text-lg text-white ">
          
        </td>
    </tr> 
  )
}
