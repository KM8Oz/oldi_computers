// import React from 'react'
import React, { FunctionComponent } from 'react';
import styled from 'styled-components'
export interface Data {
   carousel: any,
   links:any,
   banner_foot:any,
   sponsores:Array<string>
}
interface LayoutProps {
   container:FunctionComponent<any>,
    headbanner:FunctionComponent<any>,
    links:FunctionComponent<any>,
    footbanner:FunctionComponent<any>,
    sponsores:FunctionComponent<any>,
    data:Data
}
const { height, width } = window.screen;
const border = "border:1px dotted #ccc;";
export default function Layout({headbanner, links, container, footbanner, sponsores , data}: LayoutProps) {
   // console.log(data);
   const Headbannerc = headbanner;
   const Linksc = links;
   const Containercc = container;
   const Footbannerc = footbanner;
   const Sponsoresc = sponsores;
    return (
     <Container>
        <HeadBanner >
            <Headbannerc  slides={data?.carousel} />
        </HeadBanner>
        <Links >
           <Linksc links={data?.links}/>
        </Links>
        <ProductsContainer>
            <Containercc />
            </ProductsContainer>
        <FootBanner >
          <Footbannerc footer={data?.banner_foot} />
        </FootBanner>
        <Sponsores >
            <Sponsoresc list={data?.sponsores} />
            </Sponsores>
     </Container>
    )
}

const Container = styled.div`
   width:100%;
   max-width: 1300px;
   margin:0 auto;
   display: block;
   scrollbar-color: #0060cc;
   scrollbar-width: 0;
   scroll-behavior: smooth;
   height: 100%;
   /* background-color: #444; */
`;
const HeadBanner = styled.div`
   width:100%;
   height: ${height/3}px;
   /* ${border} */
`;
const Links = styled.div`
   width:100%;
   height: fit-content;
   /* ${border} */
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
   /* ${border} */
`;
const Sponsores = styled.div`
   width:100%;
   /* height: ${height/8}px; */
   height:fit-content;
   /* ${border} */
`;