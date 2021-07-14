import React from 'react'
import styled from "styled-components";
import tools from '../../tools';
const ListSponsores = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom:1em;
`;
const Item =  styled.img`
      object-fit: contain;
width: 130px;
height: 70px;
padding: .5em .5em;
image-rendering: optimizequality;
`;
export default function SponsoresC({list}:{list:Array<string>}) {
   
    return (
        <ListSponsores>
            {list.map((src, i)=>(<Item src={tools.img(src)} alt={String(src)} key={i} />))}
        </ListSponsores>
    )
}
