import React from 'react'

import img from '../../../img/success.png'
import Loader from '../../shared/Loader/loader';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


const Success = () => {

  const { loading } = useSelector(state => state.auth);





  return (
    <React.Fragment>
{loading ? <Loader /> :(
  
  <React.Fragment>
<img style = {{marginTop:"14rem", marginLeft:"40%"}} src={img} alt="Logo" />

<h1 style={{marginTop:"3rem", color: "green" , marginLeft:"32.5rem", fontSize: "30px"}}>Email Verified Successfully</h1>
    <Button style={{marginLeft:"41rem" }} color='primary'>Connexion</Button>
</React.Fragment>

)}
    </React.Fragment>
  )
}

export default Success

