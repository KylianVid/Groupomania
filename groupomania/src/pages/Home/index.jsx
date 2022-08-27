import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import { useTheme } from '../../utils/hooks'
import Header from '../../components/Header'
import SinglePost from '../../components/Post/Single'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const HomeContainer = styled.div`
  margin: 5%;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark} ;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`


function Home() {
    const { theme } = useTheme();

    return (
        <HomeWrapper theme={ theme }>
            <Header />
            <HomeContainer>
                <SinglePost/>
            </HomeContainer>
        </HomeWrapper>
    )

}

export default Home