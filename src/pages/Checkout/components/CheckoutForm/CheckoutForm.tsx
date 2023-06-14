import { useCartContext } from 'context'
import { Form, Field, Formik } from 'formik'
import { OrderValidationSchema } from './schema/OrderValidationSchema'
import { Button } from 'components'

import {
    Container,
    WFull,
    Label,
    CardInput,
    SecurityInput,
    ExpYearInput,
    ExpMonthInput,
    ExpSecuContainer,
    FullNameInput,
    CardNumInput,
    ErrorMsg,
} from './CheckoutForm.styled'

type TOrderInformation = {
    fullName: string
    email: string
    cardNumber: string
    year: string
    month: string
    securityCode: string
    cardName: string
}

const initialValues = {
    fullName: '',
    email: '',
    cardNumber: '',
    year: '',
    month: '',
    securityCode: '',
    cardName: '',
}

const submitHandler = (values: TOrderInformation) => {
    console.log(values)
}

export const CheckoutForm = () => {
    const { cartItems } = useCartContext()
    return (
        <Container>
            <WFull>
                <h1>
                    Secure Checkout
                    <span />
                </h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    validationSchema={OrderValidationSchema}
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
                                    <Label htmlFor='fullName'>Full Name</Label>
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
                                    <Label htmlFor='email'>Email</Label>
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
                                        Card number
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
                                            <Label htmlFor='year'>Year</Label>
                                        )}
                                        <Field
                                            type='number'
                                            id='year'
                                            name='year'
                                            placeholder='Year'
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
                                            <Label htmlFor='month'>Month</Label>
                                        )}
                                        <Field
                                            type='number'
                                            id='month'
                                            name='month'
                                            placeholder='Month'
                                            as={ExpMonthInput}
                                        />
                                    </div>
                                </div>
                                <div>
                                    {errors.securityCode &&
                                    touched.securityCode ? (
                                        <ErrorMsg
                                            name='securityCode'
                                            component='span'
                                        />
                                    ) : (
                                        <Label htmlFor='securityCode'>
                                            Security code
                                        </Label>
                                    )}
                                    <Field
                                        type='number'
                                        id='securityCode'
                                        name='securityCode'
                                        placeholder='Security code'
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
                                    <Label htmlFor='cardName'>Card name</Label>
                                )}
                                <Field
                                    type='text'
                                    id='cardName'
                                    name='cardName'
                                    placeholder='Name on the card'
                                    as={CardInput}
                                />
                            </div>
                            <Button
                                mode='order'
                                type='submit'
                                // disabled={cartItems.length === 0}
                            >
                                Place Order
                            </Button>
                        </Form>
                    )}
                </Formik>
            </WFull>
        </Container>
    )
}
