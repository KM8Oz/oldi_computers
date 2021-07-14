import React, { useEffect, useState } from 'react'
import styled, { css } from "styled-components"; 
import tools from "../../tools"
import { animated, useTransition } from "react-spring";
export interface Slide {
    title:string,
    subtitle:string,
    pic:string
} 
const CarousalContainer =  styled.div`
    width:100%;
    height:100%;
    display:flex;
    background-color: #444;
    justify-content: center;
    align-items:center;
    position: relative;
    overflow: hidden;
`;
const Details = styled.div`
            width:100%;
            max-width:400px;
            min-height: 200px;
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
   font-size:2em;
   font-weight: 700;
   max-height:50px;
   user-select: none;
`;
const Subtitle =  styled.p`
    font-family: GothamPro;
    font-size:1em;
   font-weight: 200;
   user-select: none;
`;
const Progress = styled.div`
    width:100%;
    max-width:150px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* align-self: flex-end; */
    height: 50px;
    position: absolute;
    left:3em;
    bottom:0px;
    cursor: pointer;
    user-select:none;
`;
// import theme from "../../tools/global";
export default function HeadbannerC({slides}:{slides:Array<Slide>}) {
    // console.log(slides);
     const images = slides?.map((e, i)=>tools.img(e.pic));
    //  console.log(images);
     var intv_uuid:any;
     const [index, setindex] = useState(0);
     const interchange = ()=> setindex((index)=> (index + 1) % images.length);
     useEffect(() => {
          intv_uuid = setInterval(()=>{
             interchange();
         },5000)
         return () => {
             clearInterval(intv_uuid);
         }
     }, [])
     const StopStart = ()=>{
        // intv_uuid ? clearInterval(intv_uuid) : (intv_uuid = setInterval(()=>{
        //     interchange();
        // },3000))
       console.log("ok");
       
    }
    const Points = ({active, index, setindex}:{active:boolean, index:number, setindex:(index:number)=>void})=>{
        return (
          <div onClick={()=>setindex(index)} style={{
              width:"15px",
              height:"15px",
              borderRadius:"20px",
              backgroundColor:active?"#ccc":"#444"
          }}>
          </div>  
        )
    };
     const transitions = useTransition(index,{
         keys: index,
         from: { opacity: 0, transform:"scale(1.01)"},
         enter: { opacity: 1, transform:"scale(1)" },
         leave: { opacity: 0, transform:"scale(.99)" },
         config: { duration: 1000 },
     })
    return (<CarousalContainer>
        {transitions((style, i) => (
            <animated.div  style={{
            backgroundImage:`url(${images[i]})`,
            width:"100%",
            height:"100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position:"absolute",
            ...style}}>
            <Details>
                <Title>
                {slides[i].title}
                </Title>
                <Subtitle>
                {slides[i].subtitle}
                </Subtitle>
                 <Progress>
                     {
                     images.map((e, s)=>(<Points active={i == s} index={s}  setindex={setindex} />))
                     }
                 </Progress>
            </Details>
            </animated.div>
            ))}
    </CarousalContainer>)
}
