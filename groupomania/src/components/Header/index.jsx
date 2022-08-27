import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LightLogo from '../../assets/icon-left-font-monochrome-white.png'
import DarkLogo from '../../assets/icon-left-font-monochrome-black.png'
import Plus from '../../assets/plus-black.svg'
import { useTheme } from '../../utils/hooks'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'

const HomeLogo = styled.img`
    height: 120px;
`
const NavContainer = styled.nav`
  padding: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) =>
  theme === 'light' ? colors.tertiary : colors.secondary};
`
// add btn addPost, btn deconnexion

const BtnContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: right;
    align-items: center;
`
const AddPost = styled.button`
    display: flex;
    height: 30px;
    width: 30px;
    border: 2px solid ${({ theme }) =>
    theme === 'light' ? colors.secondary : colors.tertiary};
    background-color: ${({ theme }) =>
    theme === 'light' ? colors.secondary : colors.tertiary};
    border-radius: 50%;
    margin-right: 2%;
`
const PlusSvg = styled.img`
    height: 20px;
    position: relative;
    right: 3px;
    top: 2px;
`
const BtnDeconnexion = styled.button`
    display: flex;
    height: 50%;
    width: min-content;
    border: 2px solid ${({ theme }) =>
    theme === 'light' ? colors.secondary : colors.tertiary};
    border-radius: 5px;
    background-color: ${({ theme }) =>
    theme === 'light' ? colors.secondary : colors.tertiary};
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer theme={ theme } >
            <Link to="/Home">
                <HomeLogo src={theme === 'light' ?  LightLogo : DarkLogo} />
            </Link>
            <BtnContainer>
                <Link to="/Home/newPost">
                    <AddPost theme={ theme }>
                        <PlusSvg src= {Plus} /> {/* changer la couleur to #4E5166 en darkmode */}
                    </AddPost>
                </Link>
                <BtnDeconnexion theme={ theme } >
                    Deconnexion
                </BtnDeconnexion>
            </BtnContainer>
        </NavContainer>
    )
}

export default Header