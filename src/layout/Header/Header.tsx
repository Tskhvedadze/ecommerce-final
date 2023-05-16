import { PrivateNavBar } from './PrivateNavBar/PrivateNavBar'
import { PublicNavBar } from './PublicNavBar/PublicNavBar'

import { SNavBarLayout } from './HeaderStyled/Header.styled'

export const Header = () => {
    return (
        <SNavBarLayout>
            <PublicNavBar />
            {/* <PrivateNavBar /> */}
        </SNavBarLayout>
    )
}
