import React, { Fragment, useEffect } from 'react'


import Layout from '../shared/layout';
import Restaurant from './Restaurant';
import Loader from '../shared/Loader/loader'

import { useDispatch, useSelector } from 'react-redux'


import { getTraderRestaurants } from '../../actions/restaurantActions'


import './restaurant.scss'

import { Grid } from '@mui/material';


const AllRestaurants = ({ match }) => {

  




  

  const dispatch = useDispatch();

  
  const { loading, restaurants } = useSelector(state => state.restaurants)


 


  useEffect(() => {

    
    dispatch(getTraderRestaurants());

  
    

  }, [dispatch])



    return(
        <Layout>
        {loading ? <Loader /> : (
            <Fragment>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
         <Grid container spacing={{ xs: 2, md: 5 }} style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}  >
         {restaurants.map(restaurant => (
             <Restaurant key={restaurant._id} restaurant={restaurant} col={4} />
                          ))}
                </Grid>
                 </div>
                           
            </Fragment>
        )}

    </Layout>
)
}

export default AllRestaurants;