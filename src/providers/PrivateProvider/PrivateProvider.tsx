/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { PrivateContext } from 'context'
import { TUser_Roles } from 'types/user.types'
import { TLocalStorage } from 'types/localestorage'

export const PrivateProvider = ({ children }: PropsWithChildren) => {
  const [pending, setPending] = useState<boolean>(true)
  const [currentRole, setCurrentRole] = useState<TUser_Roles>(TUser_Roles.GUEST)

  const TOKEN = localStorage.getItem(TLocalStorage.ACCESSTOKEN)

  useEffect(() => {
    if (TOKEN) {
      const { isAdmin }: { isAdmin: boolean } = jwt_decode(TOKEN)
      if (isAdmin) {
        setCurrentRole(TUser_Roles.ADMIN)
      } else {
        setCurrentRole(TUser_Roles.USER)
      }
      setPending(false)
    } else {
      setPending(false)
    }
  }, [])

  return (
    <PrivateContext.Provider value={{ pending, currentRole }}>
      {children}
    </PrivateContext.Provider>
  )
}
