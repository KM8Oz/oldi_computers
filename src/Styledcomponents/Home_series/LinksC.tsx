import React from 'react'
import { HomeSvg, TriangleSvg } from "../../components";
import styled  from "styled-components";
const Link = styled.p`
      width:fit-content;
      /* max-width:150px; */
      height:100%;
      font-family: "GothamPro";
      padding: 1em 1em;
      @media (max-width:500px){
        font-size: .6em;
        padding: 1em .5em;
      }
      cursor: pointer;
      user-select:none;
`;
const Wrapper = styled.div`
   margin:0px auto;
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: flex-start;
   padding: 0em 0em 0em 1em;
   @media (max-width:500px){
    padding: 0em 0em 0em 0em;
    width: 90%;
   }
`;
export default function LinksC({links}:{links:any}) {
    return (
        <Wrapper>
          <HomeSvg size={.05} fill="#ccc" />
           <Link style={{color:"#0066cc"}}>{links[0]}</Link>
           <TriangleSvg size={.025} fill="#ccc" />
           <Link style={{color:"#0066cc"}}>{links[1]}</Link>
           <TriangleSvg size={.025} fill="#ccc"/>
           <Link style={{color:"#444"}}>{links[2]}</Link>
        </Wrapper>
    )
}
