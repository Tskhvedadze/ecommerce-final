import { createContext, useContext } from 'react'

export enum TAuthorizationStage {
    AUTHORIZED = 'authorized',
    UNAUTHORIZED = 'unauthorized',
}

type AuthContextValue = {
    status: TAuthorizationStage
    setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>
}

export const AuthContext = createContext<AuthContextValue>({
    status: TAuthorizationStage.UNAUTHORIZED,
    setStatus: () => {},
})

export const useAuthContext = () => {
    return useContext(AuthContext)
}
