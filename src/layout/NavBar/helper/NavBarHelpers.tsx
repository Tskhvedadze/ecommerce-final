import { useQuery } from 'react-query'
import { message } from 'antd'
import { TAuthorizationStage } from 'context'
import { private_axios } from 'utils/axios/private_axios'
import { TLocalStorage } from 'types/localestorage'

function useUserDataQuery(status: string) {
    return useQuery(
        ['User', status],
        async () => {
            if (status === TAuthorizationStage.AUTHORIZED) {
                const res = await private_axios.get('/me')
                return res?.data
            }
            return null
        },
        {
            enabled: status === TAuthorizationStage.AUTHORIZED,
            cacheTime: 0,
            useErrorBoundary: (error: any) => error.response?.status >= 500,
            onError: (error) => {
                message.error(error?.message)
            },
        },
    )
}

function useHandleLogout(
    setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>,
) {
    return () => {
        localStorage.removeItem(TLocalStorage.ACCESSTOKEN)
        setStatus(TAuthorizationStage.UNAUTHORIZED)
    }
}

function getGreeting(data: any) {
    if (data) {
        return (
            <span className='capitalize text-[15px] text-amber-500 font-semibold'>
                {data?.firstName}
            </span>
        )
    } else {
        return (
            <span className='text-[15px] text-gray-300 font-semibold'>
                Guest
            </span>
        )
    }
}

export { useUserDataQuery, useHandleLogout, getGreeting }
