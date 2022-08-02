import React from "react";
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { removeItemFromCart } from '../../../../../actions/favouriteActions'
import { removeLodgingFromCart } from '../../../../../actions/favouriteActions'


import { useDispatch, useSelector } from 'react-redux'


//
import experienceIcon from "../../../../img/reservationExperienceIcon.png";
import lodgingIcon from "../../../../img/reservationLodgingIcon.png";

//
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";

//

import "../hostStyle.scss";


//fv
import HighlightOffIcon from '@mui/icons-material/HighlightOff';




const HostFavourites =() =>{
    //Fav
    const dispatch = useDispatch();
    const alert = useAlert()
//exp
    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
        alert.success('Experience Removed From Favourites')

    }

//lodging
    const { cartLodging } = useSelector(state => state.cartLodging)

    const removeCartLodgingHandler = (id) => {
        dispatch(removeLodgingFromCart(id))
        alert.success('Experience Removed From Favourites')

    }
    //Preset data

    const favouritesLodging= //[]
        [
            {id: '1', name: 'Movenpick Hotel', lodging: 'Hotel', location: 'Sousse', price: 120, image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg'},
            {id: '2', name: 'El Mouradi Hotel', lodging: 'Hotel', location: 'Mahdia', price: 130, image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg'},
            {id: '3', name: 'Dar Nour', lodging: 'Villa', location: 'Hammamet', price: 400, image:'https://t4.ftcdn.net/jpg/04/94/76/01/240_F_494760101_uDYrDBavlxK8P7OLf0tKzTqqWH6QHkcm.jpg'},
            {id: '4', name: 'Ville Verde', lodging: 'Guest House', location: 'Jbal Rsas', price: 300, image:'https://t3.ftcdn.net/jpg/01/26/79/46/240_F_126794631_74xvlIMAeOr1PlbYWp8IlZ1vsSGMYiLW.jpg'},
    ]


   
    

    return(
        <Box>

            {/* Experiences */}
            <Box>
            {cartItems.length === 0 ? <>

                            <Box className="arrayEmptyBox blueGradientText">
                                You don't have any favourite experience yet,
                                {/* A link to lodgings' list, opens in new tab */}
                                <Link to= {`/allexperiences`}  className="pinkGradientText" target="_blank">  check experiences!</Link>
                            </Box>
            
            </>

            :( <>
             <Box className="flex">
                    <img width={45}  src={experienceIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
        {cartItems.map(item => (
        
        <Box className="hostFavouriteItem" key={item.experience}>
            <Box className="relative flex">
                <img src={item.image} alt={item.name+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartItemHandler(item.experience)}/>
            </Box>
            <Box sx={{position: 'relative', width: '100%'}}>
                {/* experience data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/experience/${item.experience}`}>
                    <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.name}</Box>
                    </Link>
                    <Box className="hostFavouriteItemLodgingTypeFont" >{item.theme}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                    <Box className="hostFavouriteItemLocationPriceFont" >{item.place}, Tunisia</Box>
                    <Box className="hostFavouriteItemLocationPriceFont">{item.price} DT</Box>
                </Box>
            </Box>

        </Box>
         ))}
         </>
                </Grid>
            </>)
    }
               
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Lodging */}
            <Box>
            {cartLodging.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any favourite lodging yet,
                    {/* A link to lodgings' list, opens in new tab */}
                    <Link to= {`/alllodgings`}  className="pinkGradientText" target="_blank">  check lodgings!</Link>
                </Box>

                </>

                :( <>
                <Box className="flex">
                <img width={45}  src={experienceIcon} alt="Experience icon"/>
                <Box className="pinkGradientText titleFont ml-7" >Lodging</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
                {cartLodging.map(item => (

                <Box className="hostFavouriteItem" key={item.lodging}>
                <Box className="relative flex">
                <img src={item.image} alt={item.title+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartLodgingHandler(item.lodging)}/>
                </Box>
                <Box sx={{position: 'relative', width: '100%'}}>
                {/* Lodging data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/lodging/${item.lodging}`}>
                <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.title}</Box>
                </Link>
                <Box className="hostFavouriteItemLodgingTypeFont" >{item.lodgingType}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                <Box className="hostFavouriteItemLocationPriceFont" >{item.address}, Tunisia</Box>
                <Box className="hostFavouriteItemLocationPriceFont">{item.pricepernight} DT</Box>
                </Box>
                </Box>

                </Box>
                ))}
                </>
                </Grid>
                </>)
                }

          </Box>

        </Box>
    )

}

export default HostFavourites;