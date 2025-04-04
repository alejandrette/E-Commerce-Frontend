import { safeParse } from "valibot";
import { DraftProductSchema, ProductsSchema } from "../types";
import axios from "axios";

type addProductProps = {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(data: addProductProps) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price
    })
    if(result.success){
      const url = `${import.meta.env.VITE_URL_BACKEND}api/products`
      await axios.post(url, { name: result.output.name, price: result.output.price })
    } else {
      throw new Error('Data invalid')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_URL_BACKEND}api/products`
    const { data } = await axios.get(url)    
    const result = safeParse(ProductsSchema, data.data)

    if(result.success){
      return result.output
    } else {
      throw new Error('Error get products...')
    }
  } catch (error) {
    console.error(error)
  }
}