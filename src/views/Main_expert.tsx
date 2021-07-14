import React from 'react'
import { HeadbannerC, FootbannerC, ProductsContainerC,LinksC, SponsoresC } from "../Styledcomponents/Main_expert"
import Layout from '../layout'
import tools from "../tools"
export default function Main_expert({data}:{data:any}) {
  tools.setTitle("Main_expert");
    return (
      <Layout headbanner={HeadbannerC} sponsores={SponsoresC} links={LinksC} container={ProductsContainerC} footbanner={FootbannerC} />
    )
}
