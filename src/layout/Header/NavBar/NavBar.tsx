import { SearchField } from 'components'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import {
    SNavBarHeader,
    SNavBarFlexContainer,
    SContentsDiv,
    SPaddingDiv,
    SFirstTitle,
    SSecondTitle,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

type NavigationProps = {}

export const NavBar = (props: NavigationProps) => {
    return (
        <SNavBarHeader>
            <SNavBarFlexContainer>
                <SContentsDiv>
                    <img
                        className='h-[35px] w-[100px] m-2 '
                        src={amazon}
                        alt='eshop'
                    />
                    <SPaddingDiv>
                        <h1 className='text-xs xl:text-sm'>Hello,</h1>
                        <SFirstTitle>UserName</SFirstTitle>
                    </SPaddingDiv>
                </SContentsDiv>

                <SContentsDiv>
                    <SPaddingDiv>
                        <SSecondTitle>Home</SSecondTitle>
                    </SPaddingDiv>
                    <SPaddingDiv>
                        <SSecondTitle>Contact Us</SSecondTitle>
                    </SPaddingDiv>
                </SContentsDiv>
                <div className='flex grow relative items-center'>
                    <SearchField />
                </div>

                <SContentsDiv>
                    <SPaddingDiv>
                        <select className='p-2 bg-gray-300 text-black border rounded text-xs xl:text-sm focus:outline-yellow'>
                            <option>GEO</option>
                            <option>ENG</option>
                        </select>
                    </SPaddingDiv>
                    <SPaddingDiv>
                        <SSecondTitle>Log In</SSecondTitle>
                    </SPaddingDiv>
                    <SPaddingDiv>
                        <SSecondTitle>Register</SSecondTitle>
                    </SPaddingDiv>
                    <div className='flex pr-3 pl-3'>
                        <ShoppingCartIcon className='h-[48px] cursor-pointer' />
                        <div className='mt-7  text-xs xl:text-sm font-bold'>
                            <span className='ml-1'>3</span>
                        </div>
                    </div>
                </SContentsDiv>
            </SNavBarFlexContainer>
        </SNavBarHeader>
    )
}
