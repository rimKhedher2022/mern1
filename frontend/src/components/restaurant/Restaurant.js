import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './restaurant.scss'
import moment from 'moment'

import { useDispatch } from 'react-redux'

import { useAlert } from 'react-alert'
import { addRestaurantToCart,  removeRestaurantFromCart} from '../../actions/favouriteActions'

//MUI imports
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Restaurant = ({ restaurant, col  }) => {

  const [value, setValue] = React.useState(null);;

  const onChangefav = (event, newValue) => {
      setValue(newValue);
      if(value !== 1) {
        alert.success('Lodging Added to Favourites')

      }else{
        alert.success('Lodging Removed From Favourites')

      }
  }
  
  const dispatch = useDispatch();
  const alert = useAlert()
  
  //Add & Remove To favourite

  const addToCart = () => {
 if(value !== 1) {
    dispatch(addRestaurantToCart(restaurant._id));
  }else {
    dispatch(removeRestaurantFromCart(restaurant._id))
  }
}


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
            onClick={addToCart}
            value={value}
            onChange={onChangefav}
          />
            <img
              className = "cardd-img-top mx-auto"
              src= {restaurant.imagesPlat[0].url}
              alt= "restaurant-img"
            />
           </div>
            <div className="card__container--inner--card--date_time">
            <Link to= {`/restaurant/${restaurant._id}`} >  <h4>{restaurant.restaurantName}</h4> </Link>
                  </div>
                 
                  <p ><span style={{textAlign:"right"}}>{restaurant.address}</span></p>
             

                <p>{restaurant.platName}<span style={{textAlign:"right"}}> {moment(restaurant.openingTime).format('LT')
                }-{moment(restaurant.closingTime).format('LT')}</span></p>
                
                    </div>
        </div>
        </div>

        </Grid>
        )
    
}

export default Restaurant