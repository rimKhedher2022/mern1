import React, { Fragment, useEffect } from 'react'


import Layout from '../shared/layout';
import Transport from './Transport';
import Loader from '../shared/Loader/loader'

import { useDispatch, useSelector } from 'react-redux'


import { getTraderTransports } from '../../actions/transportActions'

import { Grid } from '@mui/material';
import './transport.scss'



const AllTransport = ({ match }) => {

  




  

  const dispatch = useDispatch();

  
  const { loading, transports } = useSelector(state => state.transports)


 


  useEffect(() => {

    
    dispatch(getTraderTransports());

  
    

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
         {transports.map(transport => (
             <Transport key={transport._id} transport={transport} col={4} />
                          ))}
                </Grid>
                 </div>
            </Fragment>
        )}

    </Layout>
)
}

export default AllTransport;