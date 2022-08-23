import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const InputWrapper = styled.div`
    color: ${({ theme }) => (theme === 'light' ? colors.primary : colors.tertiary )};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledInput = styled.input`
    border: none;
    height: 30px;
    width: 200px;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : colors.tertiary )};
    background-color: transparent;
    border: 2px solid
        ${({ theme }) => (theme === 'light' ? colors.primary : colors.tertiary )};
    border-radius: 4px;
`

function PassWordInput({ theme }) {
    const [inputPassWord, setInputPassWord] = useState('')

    return (
        <InputWrapper theme= {theme}>
            <StyledInput 
                placeholder='Password'
                theme={theme}
                onChange={(e) => setInputPassWord(e.target.value)}
            />
            {inputPassWord} {/* envoyer en backend pour vérif */}
        </InputWrapper>
    )
}

export default PassWordInput