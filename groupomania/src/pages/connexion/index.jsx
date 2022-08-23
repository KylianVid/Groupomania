import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import { useTheme } from '../../utils/hooks'
import Icon from '../../assets/icon-left-font.svg'

const ConnexionWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const ConnexionHeader = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    height: 150px;
    background-color: ${colors.secondary};
    overflow: hidden;
`

const Logo = styled.img`
    width: 100%;
    height: auto;
`

const BoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    height: 400px;
    background-color: transparent;
`

const BoxConnexion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    width: 60%;
    height: 50%;
    background-color: green;
    border-radius: 20px
`

const formulaireConnexion = styled.input`
    
`

const SwitchConnexion = styled.button`

`

//création d'un formulaire email + mdp
// bouton switch connexion/inscription 

function Connexion() {
    const { theme } = useTheme()

    return (
        <ConnexionWrapper>    
            <ConnexionHeader>
                <Logo src={Icon} />
            </ConnexionHeader>
            <BoxWrapper theme={theme}>
                <BoxConnexion>
                    
                </BoxConnexion>
            </BoxWrapper>
        </ConnexionWrapper>
    )
}

export default Connexion