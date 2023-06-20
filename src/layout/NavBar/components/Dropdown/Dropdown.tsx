import { useState } from 'react'
import { useRoleContext, TAuthorizationStage, useAuthContext } from 'context'
import { TUser_Roles } from 'types/user.types'
import { TLocalStorage } from 'types/localestorage'
import { useTranslation } from 'react-i18next'

import { Button } from 'components'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import {
  DropdownContainer,
  FlexContainer,
  SignOut,
  StyledLink,
  StyledUl,
} from './Dropdown.styled'

export const Dropdown = () => {
  const { t } = useTranslation(['components'])
  const [open, setOpen] = useState<boolean>(false)
  const { setStatus } = useAuthContext()
  const { currentRole, setCurrentRole } = useRoleContext()

  function Logout() {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN)
    setStatus(TAuthorizationStage.UNAUTHORIZED)
    setCurrentRole(TUser_Roles.GUEST)
  }

  return (
    <div className='relative'>
      <Button
        id='dropdownInformationButton'
        data-dropdown-toggle='dropdownInformation'
        type='button'
        mode='user'
        onClick={() => setOpen((prev) => !prev)}
      >
        <FlexContainer>
          <span className='pr-2'>{t('profile')}</span>
          {open ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </FlexContainer>
      </Button>
      <DropdownContainer id='dropdownInformation'>
        {open && (
          <>
            <StyledUl aria-labelledby='dropdownInformationButton'>
              {currentRole === TUser_Roles.ADMIN && (
                <li>
                  <StyledLink to={'/admin-panel'}>{t('admin')}</StyledLink>
                </li>
              )}
              <li>
                <StyledLink to={'/settings'}>{t('settings')}</StyledLink>
              </li>
            </StyledUl>
            <div className='py-2'>
              <SignOut onClick={Logout}>{t('out')}</SignOut>
            </div>
          </>
        )}
      </DropdownContainer>
    </div>
  )
}
