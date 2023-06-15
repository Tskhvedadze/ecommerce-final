import { TAuthorizationStage } from 'context'
import { TLocalStorage } from 'types/localestorage'

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

export { useHandleLogout, getGreeting }
