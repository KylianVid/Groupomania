import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'
import Icon from '../../assets/icon-left-font.svg'
import EmailInput from '../../components/Auth/EmailInput'
import PassWordInput from '../../components/Auth/PasswordInput'
import { useState } from 'react'


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
    height: 100px;
    background-image: url(${Icon});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${colors.secondary};
    overflow: hidden;
`

const BoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    height: 500px;
    background-color: transparent;
`

const BoxConnexion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 70%;
    height: 50%;
    background-color: ${colors.secondary};
    border: 4px solid ${({ theme }) => (theme === 'light' ? colors.tertiary : colors.primary )}; //changer colour en fonction du theme
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

const SwitchConnexion = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    justify-content: center;
    //background-color: red;
`
const Switchbox = styled.button`
    border: 2px solid ${colors.tertiary};
    height: 70%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : 'white'};
    color: #000000;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    
`

//création d'un formulaire email + mdp
// bouton switch connexion/inscription 

function Connexion() {
    const { theme } = useTheme()
    const methodAuth= true; //true == connexion / false == inscription

    const { data, isLoading, error } = useFetch(`http://localhost:4000/User`)

    if (error) {
        return <span>Il y a un problème</span>
    }

    return (
        <ConnexionWrapper>    
            <ConnexionHeader>
                {/* <Logo src={Icon} /> */}
            </ConnexionHeader>
            <BoxWrapper theme={theme}>
                <BoxConnexion theme={theme}>
                    <FormulaireConnexion theme={theme}>
                        <EmailInput theme={theme}/>
                        <PassWordInput theme={theme}/>
                    </FormulaireConnexion>
                    <SwitchConnexion theme={theme}>
                        <Switchbox 
                            theme={theme}
                            onClick= {() => methodAuth === true}
                        >
                            
                            Se connecter
                        </Switchbox>
                        <Switchbox 
                            theme={theme}
                            onClick= {() => methodAuth === false}
                        >  
                            S'inscrire
                        </Switchbox>
                    </SwitchConnexion>
                </BoxConnexion>
            </BoxWrapper>
        </ConnexionWrapper>
    )
}

export default Connexion