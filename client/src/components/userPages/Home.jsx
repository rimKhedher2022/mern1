import React from 'react'

import MetaData from '../shared/metaData'
import Hero from '../layout/Hero/Hero'
import Hero2 from '../layout/Hero/Hero2'
import Explore from "../layout/Hero/Explore";
import Layout from '../shared/layout'
// data
import sliderData from '../layout/Sliders/sliderData';

// component
import Sliders from '../layout/Sliders/Sliders';




const data = [
  {title:"Total Flexibility",url:"https://img.icons8.com/?id=XfRajCtVI3sU&size=2x&color=DA1D6C",description:"You're in control with free cancellation and multiple payment options that fit your plans and budget"},
  {title:"Unforgettable Experiences",url:"https://img.icons8.com/?id=26111&size=2x&color=DA1D6C",description:"Discover and book tours and activities so great that you'll want to tell everyone about it."},
  {title:"Quality First",url:"https://img.icons8.com/?id=8221&size=2x&color=DA1D6C",description:"High quality standards. Millions of reviews."},
  {title:"Award-Winning Customer Service",url:"https://img.icons8.com/?id=17446&size=2x&color=DA1D6C",description:"A new price ? A new program ? No problem.We are at your disposal, 24/7"},

]


const Home = () => {



  
  
  return (



   

  <React.Fragment>

    <Layout>

      {/* seo is here  */}
     <link rel="canonical" href=" https://www.livmo.net"/> 
     <meta name="robots"content="noindex"></meta>
     {/* seo is here  */}
     <head>


      
  <meta charset="UTF-8" />
  <title>Live More Tourism Experiences-livmo</title>

  <meta name="description" content="You don’t know where to go ?
Perfect ! Livmo website is here to offer you unforgettable tourism experiences. Join us now to start your adventure."/>





</head>


          <MetaData title={'livmo|Home Page'} />

         
    <Hero />
    <Sliders sliderData={sliderData} />
    <Hero2 />
    <Explore  data = {data}/>
   
    </Layout>
         </React.Fragment>
  )
}

export default Home