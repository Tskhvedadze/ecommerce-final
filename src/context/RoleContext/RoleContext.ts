import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { TUser_Roles } from 'types/user.types'

type TPrivateContext = {
  pending: boolean
  currentRole: TUser_Roles
  setCurrentRole: Dispatch<SetStateAction<TUser_Roles>>
}

export const RoleContext = createContext<TPrivateContext>({
  pending: true,
  currentRole: TUser_Roles.GUEST,
  setCurrentRole: () => {},
})

export const useRoleContext = () => {
  return useContext(RoleContext)
}
