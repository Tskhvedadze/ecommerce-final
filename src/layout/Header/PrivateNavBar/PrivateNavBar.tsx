import { SearchField } from '../components/SearchField/SearchField'
import { Language } from '../components/Language/Language'
import { Cart } from '../components/Cart/Cart'

import {
    SContentLayout,
    SDivLayout,
    SFlexLayout,
    SImage,
    SLink,
    SLogoutBtn,
    SUserEmail,
    SUserName,
    logo,
} from '../HeaderStyled/Header.styled'

type PrivateNavBarProps = {}

export const PrivateNavBar = (props: PrivateNavBarProps) => {
    return (
        <SFlexLayout>
            <SContentLayout>
                <SImage src={logo} alt='logo' />
                <SDivLayout>
                    <SUserName>UserName</SUserName>
                    <SUserEmail>giorgi.cxvedadze4@gmail.com</SUserEmail>
                </SDivLayout>
            </SContentLayout>
            <SContentLayout>
                <SDivLayout>
                    <SLink to='/'>Home</SLink>
                </SDivLayout>
                <SDivLayout>
                    <SLink to='contact-us'>Contact Us</SLink>
                </SDivLayout>
            </SContentLayout>
            <SearchField />
            <SContentLayout>
                <SDivLayout>
                    <Language />
                </SDivLayout>
                <SDivLayout>
                    <SLogoutBtn onClick={() => console.log('logout')}>
                        Log Out
                    </SLogoutBtn>
                </SDivLayout>
                <Cart />
            </SContentLayout>
        </SFlexLayout>
    )
}
