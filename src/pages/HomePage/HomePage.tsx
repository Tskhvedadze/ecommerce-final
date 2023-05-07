import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'

import { SGridLayout } from './GridLayout/GridLayout'

import { Div, Container } from './HomePage.styled'

import homeGrid_1 from 'assets/images/home_grid_1.jpg'
import homeGrid_2 from 'assets/images/home_grid_2.jpg'
import homeGrid_3 from 'assets/images/home_grid_3.jpg'
import homeGrid_4 from 'assets/images/home_grid_4.jpg'
import homeGrid_5 from 'assets/images/home_grid_5.jpg'
import homeGrid_6 from 'assets/images/home_grid_6.jpg'
import homeGrid_7 from 'assets/images/home_grid_7.jpg'
import homeGrid_8 from 'assets/images/home_grid_8.jpg'

const HomePage = () => {
    return (
        <Div>
            <Container>testing</Container>
            <Carousel />
            <SGridLayout>
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_1}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_2}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_3}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_4}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_5}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_6}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_7}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surprise'}
                    source={homeGrid_8}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
            </SGridLayout>
            <CarouselProduct />
            <CarouselCategory />
        </Div>
    )
}

export default HomePage
