import { createContext, useContext } from 'react'

type TCreateProductContext = {}

export const CreateProductContext = createContext<TCreateProductContext>({})

export const useCreateProductContext = () => {
  return useContext(CreateProductContext)
}
