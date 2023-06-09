import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'components'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import {
    DropdownContainer,
    FlexContainer,
    SignOut,
    StyledLink,
    StyledUl,
} from './UserDropdown.styled'

type UserDropdownProps = {
    handleLogout: () => void
}

export const UserDropdown = ({ handleLogout }: UserDropdownProps) => {
    const { t } = useTranslation(['components'])
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className=' relative'>
            <Button
                id='dropdownInformationButton'
                data-dropdown-toggle='dropdownInformation'
                type='button'
                mode='user'
                onClick={() => setOpen((prev) => !prev)}
            >
                <FlexContainer>
                    <span className='pr-2'>{t('profile')}</span>
                    {open ? (
                        <IoIosArrowUp size={20} />
                    ) : (
                        <IoIosArrowDown size={20} />
                    )}
                </FlexContainer>
            </Button>
            <DropdownContainer id='dropdownInformation'>
                {open && (
                    <>
                        <StyledUl aria-labelledby='dropdownInformationButton'>
                            <li>
                                <StyledLink to={'/'}>
                                    {t('settings')}
                                </StyledLink>
                            </li>
                        </StyledUl>
                        <div className='py-2'>
                            <SignOut onClick={handleLogout}>{t('out')}</SignOut>
                        </div>
                    </>
                )}
            </DropdownContainer>
        </div>
    )
}
