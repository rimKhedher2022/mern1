import React from 'react'
import { Helmet } from 'react-helmet'



const MetaData = ({ title }) => {
    return (
        <Helmet>
         <title>{`${title} - livmo8`}</title>  

        <meta property="og:title" content="Live More Tourism Experiences" /> 
         <meta property="og:description" content=" You don’t know where to go ? Perfect ! Livmo website is here to offer you unforgettable tourism experiences. Join us now to start your adventure." /> 
         <meta property="og:type" content= " image" /> 
         <meta property="og:url" content="http://www.livmo.net/open-graph/" /> 
         <meta property="og:image" content="http://livmo/images/open-graph.jpg" /> 
         <meta property="og:site_name" content=" livmo" />
         
        </Helmet>
    )
}

export default MetaData
