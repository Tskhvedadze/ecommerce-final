import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Formik, Field, Form } from 'formik'
import { userValidationSchema } from './schema/userSettings.shcema'
import { private_axios } from 'utils/axios/private_axios'

import { Spin, message } from 'antd'
import { Button } from 'components'

import {
    FieldContainer,
    MainContainer,
    Label,
    Input,
    ErrorMsg,
} from './UserForm.styled'

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

export const UserForm = () => {
    const { t } = useTranslation(['userSettings'])
    const queryClient = useQueryClient()
    const [isLoading, setIsLoading] = useState(false)

    const { mutateAsync } = useMutation(signUp)

    async function signUp(values: TChangeUserInfo) {
        try {
            await private_axios.post('/user', values)
            message.success(`${t('successfully')}`)

            // Invalidate the query and trigger a refetch
            queryClient.invalidateQueries('userProfile')
        } catch (error: any) {
            message.error(`${t('error_occurred')}`)
        }
    }

    async function submitHandler(values: TChangeUserInfo) {
        setIsLoading(true)

        // Delay the execution using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 3000))

        // Send the information to the backend
        await mutateAsync(values)

        // Set the isLoading state back to false after sending the information
        setIsLoading(false)
    }

    return (
        <MainContainer>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={userValidationSchema(t)}
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
                                        {t('name')}
                                    </Label>
                                )}
                                <Field
                                    id='firstName'
                                    type='text'
                                    name='firstName'
                                    placeholder={`${t('name')}`}
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
                                    <Label htmlFor='lastName'>
                                        {t('last_name')}
                                    </Label>
                                )}
                                <Field
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    placeholder={`${t('last_name')}`}
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
                                        {t('phone')}
                                    </Label>
                                )}
                                <Field
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='+9957485...'
                                    as={Input}
                                />
                            </div>
                            <div className='w-full'>
                                {errors.email && touched.email ? (
                                    <ErrorMsg name='email' component='span' />
                                ) : (
                                    <Label htmlFor='email'>{t('email')}</Label>
                                )}
                                <Field
                                    id='email'
                                    name='email'
                                    type='text'
                                    placeholder='example@gmail.com'
                                    as={Input}
                                />
                            </div>
                        </FieldContainer>
                        <div className='flex justify-end mt-4 w-full '>
                            <div className='w-full md:w-[35%]'>
                                <Button mode='update' type='submit'>
                                    {isLoading ? <Spin /> : `${t('update')}`}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </MainContainer>
    )
}
