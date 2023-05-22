import {
    SearchContainer,
    MainContainer,
    InputContainer,
    SearchIcon,
} from './SearchBar.styled'

type SearchBarProps = {}

export const SearchBar = (props: SearchBarProps) => {
    return (
        <SearchContainer>
            <MainContainer>
                <InputContainer>
                    <input placeholder='Search products...' type='text' />
                    <button>
                        <SearchIcon />
                    </button>
                </InputContainer>
            </MainContainer>
        </SearchContainer>
    )
}
