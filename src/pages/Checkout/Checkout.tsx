import { CheckoutContent, CheckoutForm } from './components'

import { MainLayout, ContentDiv, FormDiv } from './Checkout.styled'

function Checkout() {
    return (
        <MainLayout>
            <FormDiv>
                <CheckoutForm />
            </FormDiv>
            <ContentDiv>
                <CheckoutContent />
            </ContentDiv>
        </MainLayout>
    )
}

export default Checkout
