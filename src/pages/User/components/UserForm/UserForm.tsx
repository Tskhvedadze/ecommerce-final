import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Formik, Field, Form } from 'formik'

import { userValidationSchema } from './schema/userSettings.shcema'

import {
    FieldContainer,
    MainContainer,
    Label,
    Input,
    ErrorMsg,
} from './UserForm.styled'
import { Button } from 'components/index'

type TChangeUserInfo = {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
}

const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
}

const submitHandler = (values: TChangeUserInfo) => {
    console.log(values)
}

export const UserForm = () => {
    const { t } = useTranslation()
    const schema = userValidationSchema(t)
    return (
        <MainContainer>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={schema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <FieldContainer>
                            <div className='w-full mb-3 mr-3'>
                                {errors.firstName && touched.firstName ? (
                                    <ErrorMsg
                                        name='firstName'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='firstName'>
                                        First Name
                                    </Label>
                                )}
                                <Field
                                    id='firstName'
                                    type='text'
                                    name='firstName'
                                    placeholder='Jane'
                                    as={Input}
                                />
                            </div>
                            <div className='w-full mb-3'>
                                {errors.lastName && touched.lastName ? (
                                    <ErrorMsg
                                        name='lastName'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='lastName'>Last Name</Label>
                                )}
                                <Field
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    placeholder='Doe'
                                    as={Input}
                                />
                            </div>
                        </FieldContainer>
                        <FieldContainer>
                            <div className='w-full mb-3 mr-3'>
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <ErrorMsg
                                        name='phoneNumber'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='phoneNumber'>
                                        Phone Number
                                    </Label>
                                )}
                                <Field
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='Phone Number'
                                    as={Input}
                                />
                            </div>
                            <div className='w-full '>
                                {errors.email && touched.email ? (
                                    <ErrorMsg name='email' component='span' />
                                ) : (
                                    <Label htmlFor='email'>Email</Label>
                                )}
                                <Field
                                    id='email'
                                    name='email'
                                    type='text'
                                    placeholder='Email'
                                    as={Input}
                                />
                            </div>
                        </FieldContainer>
                        <div className='flex justify-end mt-4 w-full '>
                            <div className='w-full md:w-[35%]'>
                                <Button mode='form' type='submit'>
                                    Save and Update
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </MainContainer>
    )
}
