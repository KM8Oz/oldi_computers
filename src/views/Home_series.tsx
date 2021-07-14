import React from 'react'
import Layout from '../layout'
import tools from "../tools"
import { HeadbannerC, FootbannerC, ProductsContainerC,LinksC, SponsoresC } from "../Styledcomponents/Home_series"
export default function Home_series({data}:{data:any}) {
    tools.setTitle("Home_series");
    return (
        <Layout data={data} headbanner={HeadbannerC} sponsores={SponsoresC} links={LinksC} container={ProductsContainerC} footbanner={FootbannerC} />
    )
}
