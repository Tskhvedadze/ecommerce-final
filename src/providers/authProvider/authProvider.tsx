import { PropsWithChildren, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { message } from 'antd'
import { private_axios } from 'utils/axios/private_axios'
import { AuthContext, TAuthorizationStage } from 'context'
import { TLocalStorage } from 'types/localestorage'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED,
  )

  const { data } = useQuery({
    queryKey: ['userProfile', status, setStatus],
    queryFn: async () => {
      const res = await private_axios.get('/me')
      return res?.data
    },
    enabled: status === TAuthorizationStage.AUTHORIZED,
    onError: (error: any) => {
      message.error(error?.message)
    },
  })

  useEffect(() => {
    if (localStorage.getItem(TLocalStorage.ACCESSTOKEN)) {
      setStatus(TAuthorizationStage.AUTHORIZED)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ status, setStatus, data }}>
      {children}
    </AuthContext.Provider>
  )
}
