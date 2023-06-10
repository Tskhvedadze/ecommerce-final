import { useQuery } from 'react-query'
import { private_axios } from 'utils/axios/private_axios'

import { About } from './components/About/About'
import { UserForm } from './components/UserForm/UserForm'
import { MainContainer, Section } from './User.styled'

function User() {
    const { data } = useQuery(
        'userProfile',
        async () => {
            const res = await private_axios.get('/me')
            return res?.data
        },
        {
            refetchOnWindowFocus: false,
        },
    )

    return (
        <MainContainer>
            <Section>
                <About key={data?.id} {...data} />
            </Section>
            <Section>
                <UserForm />
            </Section>
        </MainContainer>
    )
}

export default User
