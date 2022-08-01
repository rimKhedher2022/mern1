import React from "react";
import Box from "@mui/material/Box";
import {Favorite} from "@mui/icons-material";

const HostFavouritesExperienceItem = ({data, onClick}) =>{


    return(
        <Box className="hostFavouriteItem">
            <Box className="relative flex">
                <img src={data.image} alt={data.name+' image'} onClick={onClick} />
                <Favorite className="favouriteHeart " fontSize="large" />
            </Box>
            <Box sx={{position: 'relative', width: '100%'}}>
                {/* Lodging data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                    <Box className="pinkGradientText hostFavouriteItemNameFont" onClick={onClick}>{data.name}</Box>
                    <Box className="hostFavouriteItemLodgingTypeFont" >{data.type}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                    <Box className="hostFavouriteItemLocationPriceFont" >{data.location}, Tunisia</Box>
                    <Box className="hostFavouriteItemLocationPriceFont">{data.price} DT</Box>
                </Box>
            </Box>

        </Box>
    )

}

export default HostFavouritesExperienceItem;