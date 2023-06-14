/* eslint-disable jsx-a11y/anchor-is-valid */
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
} from './CheckoutForm.styled'

type Props = {}

export const CheckoutForm = (props: Props) => {
    return (
        <Container>
            <WFull>
                <h1>
                    Secure Checkout
                    <span />
                </h1>
                <form className='mt-2 flex flex-col space-y-4'>
                    <WFull>
                        <Label htmlFor='fullName'>Full Name</Label>
                        <FullNameInput
                            type='text'
                            id='fullName'
                            name='fullName'
                            placeholder='John Doe'
                        />
                    </WFull>
                    <WFull>
                        <Label htmlFor='email'>Email</Label>
                        <FullNameInput
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@gmail.com'
                        />
                    </WFull>
                    <WFull>
                        <Label htmlFor='card-number'>Card number</Label>
                        <CardNumInput
                            type='text'
                            id='card-number'
                            name='card-number'
                            placeholder='1234-5678-XXXX-XXXX'
                        />
                    </WFull>
                    <ExpSecuContainer>
                        <div>
                            <Label htmlFor='month'>Expiration date</Label>
                            <div>
                                <ExpYearInput
                                    type='text'
                                    id='security-code'
                                    name='security-code'
                                    placeholder='Year'
                                />
                                <ExpMonthInput
                                    type='text'
                                    id='security-code'
                                    name='security-code'
                                    placeholder='Month'
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor='security-code'>Security code</Label>
                            <SecurityInput
                                type='text'
                                id='security-code'
                                name='security-code'
                                placeholder='Security code'
                            />
                        </div>
                    </ExpSecuContainer>
                    <div>
                        <Label htmlFor='card-name'>Card name</Label>
                        <CardInput
                            type='text'
                            id='card-name'
                            name='card-name'
                            placeholder='Name on the card'
                        />
                    </div>
                </form>
                <Button mode='order' type='submit'>
                    Place Order
                </Button>
            </WFull>
        </Container>
    )
}
