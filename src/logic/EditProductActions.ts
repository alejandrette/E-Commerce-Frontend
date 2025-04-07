import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from "react-router-dom"
import { getProductById, putProduct } from "../services/ProductService"

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