import React from 'react'
import styled from "styled-components";
import tools from "../../tools";
import { BannerButton } from '../../tools/Buttons';
const Details = styled.div`
            width: 90%;
            /* max-width:450px; */
            /* min-height: 200px; */
            position:absolute;
            display:flex;
            flex-direction: column;
            bottom:0px;
            left:0px;
            color:#fff;
            padding:0px 2em 1em 4em;
            @media (max-width: 500px) {
                padding: 0px 0em 1em 2em;
                max-width: 324px;
               }
            /* background-color:#cccccc44 ; */
`;
const Title = styled.p`
   font-family: GothamPro;
   font-size:1.7em;
   font-weight: 700;
   margin: 0em 0em ;
`;
const Subtitle =  styled.p`
    font-family: GothamPro;
    font-size:1em;
    font-weight: 100;
    margin-bottom: 3em;
`;

export default function FootbannerC({footer}:{footer:any}) {
    const Footer = styled.div`
     background-image: url("${tools.img(footer.pic)}");
     width:100%;
     height:100%;
     position:relative;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
`;
    return (
        <Footer>
             <Details>
            <Title>
            {footer?.title}
            </Title>
            <Subtitle>
            {footer?.subtitle}
            </Subtitle>
            <BannerButton>
                Собрать компьютер
            </BannerButton>
            </Details>
        </Footer>
    )
}
