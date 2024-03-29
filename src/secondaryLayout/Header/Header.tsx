import { NavLink } from 'react-router-dom'
import { LanguageSelect } from 'components'

import { MainFlexContainer, StyledImg } from './Header.styled'

import amazone_png from 'assets/images/amazon.png'

export default function Header() {
  return (
    <MainFlexContainer>
      <NavLink to={'/'}>
        <StyledImg src={amazone_png} alt='amazoneLogo' />
      </NavLink>
      <LanguageSelect />
    </MainFlexContainer>
  )
}
