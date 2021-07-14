// import React from 'react'
import React, { FunctionComponent } from 'react';
import styled from 'styled-components'
interface LayoutProps {
    container:FunctionComponent<any>,
    headbanner:FunctionComponent<any>,
    links:FunctionComponent<any>,
    footbanner:FunctionComponent<any>,
    sponsores:FunctionComponent<any>,
}
const { height, width } = window.screen;
const border = "border:1px dotted #ccc;";
export default function Layout({headbanner, links, container, footbanner, sponsores }: LayoutProps) {
   // console.log(typeof headbanner);
   const Headbannerc = headbanner;
   const Linksc = links;
   const Containercc = container;
   const Footbannerc = footbanner;
   const Sponsoresc = sponsores;
    return (
     <Container>
        <HeadBanner >
            <Headbannerc />
        </HeadBanner>
        <Links >
           <Linksc />
        </Links>
        <ProductsContainer>
            <Containercc />
            </ProductsContainer>
        <FootBanner >
          <Footbannerc />
        </FootBanner>
        <Sponsores >
            <Sponsoresc />
            </Sponsores>
     </Container>
    )
}

const Container = styled.div`
   width:100%;
   max-width: 1300px;
   margin:0 auto;
   display: block;
   scroll-behavior: smooth;
   scroll-snap-points-x: ${height}px;
   height: 100%;
   /* background-color: #444; */
`;
const HeadBanner = styled.div`
   width:100%;
   height: ${height/3}px;
   ${border}
`;
const Links = styled.div`
   width:100%;
   height: ${height/12}px;
   ${border}
`;
const ProductsContainer = styled.div`
width:100%;
height:fit-content;
min-height: ${height}px;
${border}
`;
const FootBanner = styled.div`
   width:100%;
   height: ${height/3}px;
   ${border}
`;
const Sponsores = styled.div`
   width:100%;
   height: ${height/8}px;
   ${border}
`;