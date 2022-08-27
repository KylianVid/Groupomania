import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { useTheme } from '../../utils/hooks'
import Header from '../../components/Header'

const NewPostWrapper =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const FormPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
`
const StyledH1 = styled.h1`
    margin-bottom: 20px;
    font-size: 21px;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'black')};
`
const StyledInput = styled.input`
  border: none;
  width: 80%;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'black')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'black')};
  margin-top: 5px;
  margin-bottom: 15px;
`
function NewPost() {
    const theme = useTheme();
    const [inputValue, setInputValue] = useState('')
    
    return (
        <NewPostWrapper theme ={ theme }>
            <Header/>
            <FormPostContainer>
                <StyledH1> Ajouter un nouveaux post!</StyledH1>
                <StyledLabel theme={theme}>Image</StyledLabel>
                <StyledInput
                    type='file'
                    theme={theme}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <StyledLabel theme={theme}>Description</StyledLabel>
                <StyledInput
                    type= 'text'
                    theme={theme}
                    onChange={(e) => setInputValue(e.target.value)}
                /> 
                {/* {inputValue} */}
            </FormPostContainer>
        </NewPostWrapper>
    )
}

export default NewPost