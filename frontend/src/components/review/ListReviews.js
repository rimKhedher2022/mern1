import React from 'react'
import { Fragment } from 'react'

import './reviews.scss'

import moment from 'moment'

import {  Avatar, Grid, Paper } from "@material-ui/core";
import Rating from '@mui/material/Rating';



const ListReviews = ({ reviews }) => {
    return (
       
            <Fragment>   <div style={{ padding: 14 }} className="App">

            <br/>
            {reviews && reviews.map(review => (
            <Paper style={{ padding: "40px 20px", width:"50%" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item >
                  <Avatar alt="Remy Sharp" src={review.avatar.url} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>{review.fname} {review.lname}</h4>
                  <Rating name="read-only" value={review.rating} readOnly />
                  <p style={{ textAlign: "left" }}>
                  {review.comment}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                   {moment(review.created).format('llll')}
                  </p>
                </Grid>
              </Grid>
            </Paper>
      ))}
          
          </div>
        </Fragment>
      
    )
}

export default ListReviews