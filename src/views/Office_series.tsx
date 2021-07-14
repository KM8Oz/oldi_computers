import React from 'react'
import { HeadbannerC, FootbannerC, ProductsContainerC,LinksC, SponsoresC } from "../Styledcomponents/Office_series"
import Layout from '../layout'
import tools from "../tools"
export default function Office_series({data}:{data:any}) {
    tools.setTitle("Office_series");
    return (
        <Layout data={data}  headbanner={HeadbannerC} sponsores={SponsoresC} links={LinksC} container={ProductsContainerC} footbanner={FootbannerC} />
    )
}
