import { Carousel, Card } from '../../components'

import { SGridLayout } from './GridLayout/GridLayout'

import { Div, Container } from './HomePage.styled'

const HomePage = () => {
    return (
        <Div>
            <Container>testing</Container>
            <Carousel />
            <SGridLayout>
                <Card title='we have a surptise' img='kk' link='ljjd' />
            </SGridLayout>
        </Div>
    )
}

export default HomePage
