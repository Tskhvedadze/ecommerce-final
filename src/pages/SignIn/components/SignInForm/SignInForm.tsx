import { Formik } from 'formik'
import {
    StyledForm,
    StyledLabel,
    StyledEmailInput,
    StyledPasswordInput,
    StyledButton,
} from './SignInForm.styled'

type SignInFormProps = {}

type TSignIn = {
    email: string
    password: string | number
}

const handleSubmit = (values: TSignIn) => {
    console.log(values)
}

export const SignInForm = (props: SignInFormProps) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >
            <StyledForm>
                <div>
                    <StyledLabel htmlFor='email'>Your email</StyledLabel>
                    <StyledEmailInput
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <StyledLabel htmlFor='password'>Password</StyledLabel>
                    <StyledPasswordInput
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                    />
                </div>

                <StyledButton type='submit'>Sign in</StyledButton>
            </StyledForm>
        </Formik>
    )
}
