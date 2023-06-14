import { useQuery } from 'react-query'
import { private_axios } from 'utils/axios/private_axios'

import { message } from 'antd'

import { About } from './components/About/About'
import { UserForm } from './components/UserForm/UserForm'
import { MainContainer, Section } from './User.styled'

function User() {
    const { data } = useQuery({
        queryKey: ['userProfile'],
        queryFn: async () => {
            const res = await private_axios.get('/me')
            return res?.data
        },
        suspense: true,
        refetchOnWindowFocus: false,
        onError: (error: any) => {
            message.error(error?.message)
        },
    })

    return (
        <MainContainer>
            <Section>
                <About {...data} />
            </Section>
            <Section>
                <UserForm {...data} />
            </Section>
        </MainContainer>
    )
}

export default User
