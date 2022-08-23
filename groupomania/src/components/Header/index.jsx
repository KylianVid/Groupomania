import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LightLogo from '../../assets/icon-left-font-monochrome-white.png'
import DarkLogo from '../../assets/icon-left-font-monochrome-black.png'
import { useTheme } from '../../utils/hooks'
import colors from '../../utils/styles/colors'

const HomeLogo = styled.img`
    height: 120px;
`

const NavContainer = styled.nav`
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tertiary}
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
        </NavContainer>
    )
}

export default Header