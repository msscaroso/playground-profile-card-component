import styled from "styled-components";
import ImgCardBgPattern from "./bg-pattern-card.svg"
import ImgProfilePic from "./image-victor.jpg"


const CardBgPattern = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`


const baseCard = ({className, children}) => {
    return (
        <div className={className}>
            <CardBgPattern src={ImgCardBgPattern}/>
            {children}
        </div>
    )
}

const Card = styled(baseCard)`
  display: flex;
  flex-direction: column;
  width: 24.31vw;
  height: 51.94vh;
  margin-top: 50%;
  background-color: #FFFFFF;
  border-radius: 10px;
  overflow: auto;
`


const ProfilePic = styled.img`
  border-radius: 100%;
  width: 7vw;
  height: 7vw;
  position: relative;
  top: -20%;

`

const ProfileName = styled.h1`
  margin-top: -3.33vh;
  font-size: 18px;
`

const ProfileAge = styled.span`
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #6B7082;

`

const ProfileLocation = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #6B7082;
  margin-top: -0.5vh;

`

const CardFooter = styled.div`
  border-top: 1px solid #E8E9EC;
  width: 100%;
  height: 12.22vh;
  margin-top: 2.7vh;

`

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 71.14%;
  text-align: center;
  margin: 0 auto;

  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;

  letter-spacing: 1.5px;
  color: #6B7082;
`

const P = styled.p`
  margin-top: 3.33vh;
`

const Span = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #2E3349;
`


const baseContent = ({className, children}) => {
    return (
        <div className={className}>
            <ProfilePic src={ImgProfilePic}/>
            <ProfileName>
                Victor Crest <ProfileAge>26</ProfileAge>
            </ProfileName>
            <ProfileLocation>London</ProfileLocation>
            <CardFooter>
                <FooterBox>
                    <P>
                        <Span>80K</Span><br/>
                        Followers
                    </P>
                    <P>
                        <Span>803K</Span><br/>
                        Likes
                    </P>
                    <P>
                        <Span>1.4K</Span><br/>
                        Photos
                    </P>
                </FooterBox>
            </CardFooter>
        </div>
    )
}


const Content = styled(baseContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`


function ProfileCard() {
    return (
        <Card>
            <Content/>
        </Card>
    )
}

export default ProfileCard;

