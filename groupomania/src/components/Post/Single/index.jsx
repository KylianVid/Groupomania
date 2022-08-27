import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import { useTheme } from '../../../utils/hooks'
import ProfileDefault from '../../../assets/profile.png'
import HeartEmpti from '../../../assets/heart-empti.svg'
import HeartFull from '../../../assets/heart-full.svg'

const PostWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    //background-color: red;
`
const UserNameWrapper = styled.div`
    display: flex;
    width: 300px;
    height: 60px; 
    justify-content: left;
    align-items: center;
`
const ProfileContainer = styled.div`
    display: flex;
    width: min-content; 
    height: inherit; 
    border: 3px solid ${({ theme }) =>
    theme === 'light' ? colors.tertiary : colors.secondary};
    border-radius: 50%;
    overflow: hidden;
`
const Profile = styled.img`
    height: inherit; 
`
const PostUserContainer = styled.div`
    display:flex;
    width: 30%;
    padding: 0 2% 0 2%
`
const PostContainer = styled.div`
    display: flex;
    height: 300px;
    width: min-content;
    margin: 5% 0 5% 0;
    border: 3px solid ${({ theme }) =>
    theme === 'light' ? colors.tertiary : colors.secondary};
    border-radius: 10px;
    //background-color: red;
`
const PostImg = styled.img`
    height: inherit;
    
`
const LikeWrapper = styled.div`
    display: flex;
    width: 300px;
    height: 30px;
`
const LikeContainer = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: min-content;
    background-color: ${({ theme }) => theme === 'light' ? 'white' : colors.tertiary};
`
const LikeImg = styled.img`
    height: 30px; 
    background-color: ${({ theme }) => theme === 'light' ? 'white' : colors.tertiary};
`
const LikeCompteur = styled.span`
    margin-left: 10px;
`
function SinglePost({profile, userId, picture,desciption, compteur}) {
    const { theme } = useTheme();
    const [isLiked, setIsLiked] = useState(false);
    const heart = isLiked ? HeartEmpti : HeartFull;
    /* récuperer l'user name du post */

    return (
        <PostWrapper theme={ theme }>
            <UserNameWrapper>
                <ProfileContainer theme={ theme } >
                    <Profile src= { profile } alt="profile"/>
                </ProfileContainer>
                <PostUserContainer>{userId}</PostUserContainer>
            </UserNameWrapper>
            <PostContainer theme={ theme } >
                <PostImg src= { picture }/>
            </PostContainer>
            <LikeWrapper>
                <LikeContainer theme={ theme } onClick={() => setIsLiked(!isLiked)} >
                    <LikeImg theme={ theme } src={ heart }/>
                    <LikeCompteur>{compteur}</LikeCompteur>
                </LikeContainer>
            </LikeWrapper>
        </PostWrapper>
    )
}

SinglePost.propTypes = {
    profile: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    desciption: PropTypes.string,
    compteur: PropTypes.number.isRequired,
}

SinglePost.defaultProps = {
    profile: ProfileDefault,
    userId: "Unknow",
    picture: ProfileDefault,
    desciption: "",
    compteur: 0,
}

export default SinglePost