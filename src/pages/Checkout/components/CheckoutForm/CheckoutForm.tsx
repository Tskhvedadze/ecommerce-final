import { useState } from 'react'
import { useCartContext } from 'context'
import { useTranslation } from 'react-i18next'
import { Form, Field, Formik, FormikHelpers } from 'formik'
import { OrderValidationSchema } from './schema/OrderValidationSchema'
import { Spin, message } from 'antd'

import { Button } from 'components'

import {
    Container,
    WFull,
    Label,
    SecurityInput,
    ExpYearInput,
    ExpMonthInput,
    ExpSecuContainer,
    FullNameInput,
    CardNumInput,
    ErrorMsg,
    CardInput,
} from './CheckoutForm.styled'

type TOrderInfo = {
    fullName: string
    email: string
    cardNumber: string
    year: string
    month: string
    CVV: string
    cardName: string
}

const initialValues = {
    fullName: '',
    email: '',
    cardNumber: '',
    year: '',
    month: '',
    CVV: '',
    cardName: '',
}

export const CheckoutForm = () => {
    const { t } = useTranslation(['Checkout'])
    const { cartTotal, setCartItems } = useCartContext()
    const [loading, setLoading] = useState(false)

    const submitHandler = async (
        _values: TOrderInfo,
        { resetForm }: FormikHelpers<TOrderInfo>,
    ) => {
        if (!cartTotal) {
            setLoading(false)
            message.warning(`${t('warrning')}`)
        } else {
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            message.success(`${t('payment')}`)
            setLoading(false)
            resetForm()
            setCartItems([])
        }
    }

    return (
        <Container>
            <WFull>
                <h1>{t('secure_checkout')}</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    validationSchema={cartTotal && OrderValidationSchema(t)}
                >
                    {({ errors, touched }) => (
                        <Form className='mt-2 flex flex-col space-y-4'>
                            <WFull>
                                {errors.fullName && touched.fullName ? (
                                    <ErrorMsg
                                        name='fullName'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='fullName'>
                                        {t('full_name')}
                                    </Label>
                                )}
                                <Field
                                    type='text'
                                    id='fullName'
                                    name='fullName'
                                    placeholder='John Doe'
                                    as={FullNameInput}
                                />
                            </WFull>
                            <WFull>
                                {errors.email && touched.email ? (
                                    <ErrorMsg name='email' component='span' />
                                ) : (
                                    <Label htmlFor='email'>{t('email')}</Label>
                                )}
                                <Field
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='example@gmail.com'
                                    as={FullNameInput}
                                />
                            </WFull>
                            <WFull>
                                {errors.cardNumber && touched.cardNumber ? (
                                    <ErrorMsg
                                        name='cardNumber'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='cardNumber'>
                                        {t('card_number')}
                                    </Label>
                                )}
                                <Field
                                    type='number'
                                    id='cardNumber'
                                    name='cardNumber'
                                    placeholder='1234-5678-XXXX-XXXX'
                                    as={CardNumInput}
                                />
                            </WFull>
                            <ExpSecuContainer>
                                <div>
                                    <div>
                                        {errors.year && touched.year ? (
                                            <ErrorMsg
                                                name='year'
                                                component='span'
                                            />
                                        ) : (
                                            <Label htmlFor='year'>
                                                {t('year')}
                                            </Label>
                                        )}
                                        <Field
                                            type='number'
                                            id='year'
                                            name='year'
                                            placeholder={`${t('year')}`}
                                            as={ExpYearInput}
                                        />
                                    </div>
                                    <div>
                                        {errors.month && touched.month ? (
                                            <ErrorMsg
                                                name='month'
                                                component='span'
                                            />
                                        ) : (
                                            <Label htmlFor='month'>
                                                {t('month')}
                                            </Label>
                                        )}
                                        <Field
                                            type='number'
                                            id='month'
                                            name='month'
                                            placeholder={`${t('month')}`}
                                            as={ExpMonthInput}
                                        />
                                    </div>
                                </div>
                                <div>
                                    {errors.CVV && touched.CVV ? (
                                        <ErrorMsg name='CVV' component='span' />
                                    ) : (
                                        <Label htmlFor='CVV'>
                                            {t('security')}
                                        </Label>
                                    )}
                                    <Field
                                        type='number'
                                        id='CVV'
                                        name='CVV'
                                        placeholder='CVV'
                                        as={SecurityInput}
                                    />
                                </div>
                            </ExpSecuContainer>
                            <div>
                                {errors.cardName && touched.cardName ? (
                                    <ErrorMsg
                                        name='cardName'
                                        component='span'
                                    />
                                ) : (
                                    <Label htmlFor='cardName'>
                                        {t('card_name')}
                                    </Label>
                                )}
                                <Field
                                    type='text'
                                    id='cardName'
                                    name='cardName'
                                    placeholder={`${t('name_on_card')}`}
                                    as={CardInput}
                                />
                            </div>
                            <Button mode='order' type='submit'>
                                {loading ? (
                                    <Spin className='py-1' />
                                ) : (
                                    `${t('order')}`
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </WFull>
        </Container>
    )
}
