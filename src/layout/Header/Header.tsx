import { PrivateNavBar } from './PrivateNavBar/PrivateNavBar'
import { PublicNavBar } from './PublicNavBar/PublicNavBar'

import { NavBarLayout } from './Header.styled'

export const Header = () => {
    return (
        <NavBarLayout>
            <PublicNavBar />
            {/* <PrivateNavBar /> */}
        </NavBarLayout>
    )
}
