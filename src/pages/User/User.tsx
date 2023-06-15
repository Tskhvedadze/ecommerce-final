import { useAuthContext } from 'context'
import { About } from './components/About/About'
import { UserForm } from './components/UserForm/UserForm'
import { MainContainer, Section } from './User.styled'

function User() {
    const { data } = useAuthContext()

    return (
        <MainContainer>
            <Section>
                <About {...data} />
            </Section>
            <Section>
                <UserForm />
            </Section>
        </MainContainer>
    )
}

export default User
