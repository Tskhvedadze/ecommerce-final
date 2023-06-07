import { Formik } from 'formik'

import { Button, Input, Label, Form } from 'components'

type SignInFormProps = {}

type TSignIn = {
    email: string
    password: string | number
    phone: string
    name: string
    lastName: string
}

const handleSubmit = (values: TSignIn) => {
    console.log(values)
}

export const SignUpForm = (props: SignInFormProps) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: '',
                lastName: '',
                phone: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className='flex flex-col'>
                    <div className='flex w-full justify-between'>
                        <Label htmlFor='name'>Name</Label>
                        <Label htmlFor='lastName'>Last Name</Label>
                    </div>
                    <div className='flex '>
                        <Input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'
                        />
                        <hr className='mr-2' />
                        <Input
                            type='text'
                            name='lastName'
                            id='lastName'
                            placeholder='last Name'
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor='phone'>Phone number</Label>
                    <Input
                        type='number'
                        name='phone'
                        id='phone'
                        placeholder='Phone Number'
                    />
                </div>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                    />
                </div>
                <Button mode='form' type='button'>
                    Create an account
                </Button>
            </Form>
        </Formik>
    )
}
