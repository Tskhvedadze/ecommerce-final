import {
    SSearchContainer,
    SMainContainer,
    SInputContainer,
    SGlassIcon,
} from './SearchField.styled'

type SearchFieldProps = {}

export const SearchField = (props: SearchFieldProps) => {
    return (
        <SSearchContainer>
            <SMainContainer>
                <SInputContainer>
                    <input placeholder='Search products...' type='text' />
                    <button>
                        <SGlassIcon />
                    </button>
                </SInputContainer>
            </SMainContainer>
        </SSearchContainer>
    )
}
