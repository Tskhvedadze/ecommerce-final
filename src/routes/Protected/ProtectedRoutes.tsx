import { PropsWithChildren } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { usePrivateContext } from 'context'
import { TUser_Roles } from 'types/user.types'
import { LoadingSpiner } from 'components'

type ProtectedRoutesProps = {
  roles: TUser_Roles[]
}

function ProtectedRoutes({ roles }: PropsWithChildren<ProtectedRoutesProps>) {
  const { pending, currentRole } = usePrivateContext()

  if (pending) return <LoadingSpiner />

  return roles.includes(currentRole) ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} replace />
  )
}

export default ProtectedRoutes
