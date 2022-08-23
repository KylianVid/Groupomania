import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`

    *{
        font-family: 'Lato-regular', sans-serif
    }

    body {
        background-color: ${({ isDarkMode }) => isDarkMode ? colors.tertiary : colors.backgroundLight};
        margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle