import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import './experienceDetails'


//MUI imports
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Experience = ({ experience, col  }) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
        return (
                  <Grid item >
                  <div className ={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
                  <div className="card__container">
                  <div className="card__container--inner--card">
                    <div className='img-wrapper'>
                  <StyledRating
                  className='btn'
                    name="customized-color"
                    defaultValue={0}
                    max={1} 
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon  fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon sx={{ color:"#E42651"}} fontSize="inherit" />}
                  />
                    <img
                      className = "cardd-img-top mx-auto"
                      src= {experience.YourIdeaImage[0].url}
                      alt= "experience-img"
                    />
                   </div>
                    <div className="card__container--inner--card--date_time">
                    <Link to= {`/experience/${experience._id}`} >  <h4>{experience.exptitle}</h4> </Link>
                          </div>
                         
                          <p ><span style={{textAlign:"right"}}>{experience.location}</span></p>
                     
    
                        <p>{experience.theme}<span style={{textAlign:"right"}}>{experience.price} DT</span></p>
                        
                            </div>
                </div>
                </div>
        
                </Grid>
        )
    
}

export default Experience