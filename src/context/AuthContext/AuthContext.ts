import { createContext, useContext } from 'react'

export enum TAuthorizationStage {
    AUTHORIZED = 'authorized',
    UNAUTHORIZED = 'unauthorized',
}

type AuthContextValue = {
    status: TAuthorizationStage
    setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>
    data: any
}

export const AuthContext = createContext<AuthContextValue>({
    setStatus: () => {},
    status: TAuthorizationStage.UNAUTHORIZED,
    data: undefined,
})

export const useAuthContext = () => {
    return useContext(AuthContext)
}
