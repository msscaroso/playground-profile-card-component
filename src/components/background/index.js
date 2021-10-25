import styled from "styled-components";
import ImgBgPatternTop from "./bg-pattern-top.svg"
import ImgBgPatternBottom from "./bg-pattern-bottom.svg"


const BgPattern = styled.img`
  z-index: -1;
  position: absolute;
  width: 978px;
  height: 976px;
  opacity: 0.5;
`

const ImageTop = styled(BgPattern)`
  top: -80%;
  left: -25%;
  transform: rotate(45deg);

`


const ImageBottom = styled(BgPattern)`
  top: 50%;
  left: 50%;
  transform: rotate(-20deg);
`


function Background () {
    return (
        <>
            <ImageTop src={ImgBgPatternTop}/>
            <ImageBottom src={ImgBgPatternBottom}/>
        </>
    )
}


export default Background;
