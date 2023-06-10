import { Outlet, Navigate } from 'react-router-dom'
import { TAuthorizationStage, useAuthContext } from 'context'

function PublicRoutes() {
    const { status } = useAuthContext()
    const isLogedIn = status === TAuthorizationStage.AUTHORIZED
    return !isLogedIn ? <Outlet /> : <Navigate to={'/'} replace />
}

export default PublicRoutes
