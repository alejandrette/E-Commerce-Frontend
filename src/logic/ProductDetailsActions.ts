import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { deleteProduct, updateAvailability } from "../services/ProductService"

export async function deleteAction({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id)
    return redirect('/')
  }
}

export async function toggleAvailabilityAction({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    await updateAvailability(+params.id)    
    return redirect('/')
  }
}