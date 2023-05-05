import { Carousel, Card } from '../../components'
import { CarouselCategory } from '../../components/Carousel/CarouselCategory'

import { SGridLayout } from './GridLayout/GridLayout'

import { Div, Container } from './HomePage.styled'

const homeGrid_1 = require('../../assets/images/home_grid_1.jpg')
const homeGrid_2 = require('../../assets/images/home_grid_2.jpg')
const homeGrid_3 = require('../../assets/images/home_grid_3.jpg')
const homeGrid_4 = require('../../assets/images/home_grid_4.jpg')
const homeGrid_5 = require('../../assets/images/home_grid_5.jpg')
const homeGrid_6 = require('../../assets/images/home_grid_6.jpg')
const homeGrid_7 = require('../../assets/images/home_grid_7.jpg')
const homeGrid_8 = require('../../assets/images/home_grid_8.jpg')

const HomePage = () => {
    return (
        <Div>
            <Container>testing</Container>
            <Carousel />
            <SGridLayout>
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_1}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_2}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_3}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_4}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_5}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_6}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_7}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
                <Card
                    title={'we have a surptise'}
                    source={homeGrid_8}
                    altName={'banner'}
                    link={'see terms and conditions'}
                />
            </SGridLayout>
            <CarouselCategory />
        </Div>
    )
}

export default HomePage
