import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../utils/styles/colors'

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
    color: ${colors.tertiary};
    background-color: transparent;
    border: 2px solid
        ${colors.tertiary};
    border-radius: 4px;
`

function EmailInput({ theme }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <InputWrapper theme={theme}>
        <StyledInput
            theme={theme}
            placeholder='E-mail'
            onChange={(e) => setInputValue(e.target.value)}
            type="email"
            id='email'
        />
        {inputValue} {/* envoyer en backend pour vérif */}
    </InputWrapper>
  )
}

export default EmailInput