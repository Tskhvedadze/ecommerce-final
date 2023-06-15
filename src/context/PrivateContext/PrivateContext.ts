import { createContext, useContext } from 'react'
import { TUser_Roles } from 'types/user.types'

type TPrivateContext = {
  pending: boolean
  currentRole: TUser_Roles
}

export const PrivateContext = createContext<TPrivateContext>({
  pending: true,
  currentRole: TUser_Roles.GUEST,
})

export const usePrivateContext = () => {
  return useContext(PrivateContext)
}
