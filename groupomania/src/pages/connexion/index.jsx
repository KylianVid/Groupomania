import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import { useTheme } from '../../utils/hooks'
import Icon from '../../assets/icon-left-font.svg'
import EmailInput from '../../components/EmailInput'
import PassWordInput from '../../components/PasswordInput'

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
    align-items: center;
    width: 50%;
    height: 50%;
    background-color: ${colors.secondary};
    border: 4px solid ${colors.tertiary}; //changer colour en fonction du theme
    border-radius: 10px;
    overflow: hidden;
`

const FormulaireConnexion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    width: 100%;
    height: 60%;
    background-color: transparent;
`

const SwitchConnexion = styled.button`
    display: flex;
    width: 100%;
    height: 40%;
    background-color: red;
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
                    <FormulaireConnexion>
                        <EmailInput/>
                        <PassWordInput/>
                    </FormulaireConnexion>
                    <SwitchConnexion>
                        
                    </SwitchConnexion>
                </BoxConnexion>
            </BoxWrapper>
        </ConnexionWrapper>
    )
}

export default Connexion