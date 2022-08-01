import React from "react";
//
import experienceIcon from "../../../../img/reservationExperienceIcon.png";
import lodgingIcon from "../../../../img/reservationLodgingIcon.png";

//
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";

//
import HostFavouritesLodgingItem from "./HostFavouriteLodgingItem";
import HostFavouritesExperienceItem from "./HostFavouritesExperienceItem";
import "../hostStyle.scss";



const HostFavourites =() =>{

    //Preset data
    const favouritesExperiences= //[]
        [
            {id: '1', name: 'Sushi Workshop', type: 'Culture', location: 'Marsa', price: 120, image:'https://t4.ftcdn.net/jpg/03/23/88/07/240_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg'},
            {id: '2', name: 'Yuma concert', type: 'Culture', location: 'Bizerte', price: 120, image:'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/288454887_176130824791789_7581388712270996806_n.png?stp=dst-png_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=eHrnGIWpwdsAX_E2ZC_&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_ofpDeyoIdQNYmK007BvrLIZJulbbwSHGihPn_M9oZWQ&oe=62DECC28'},
            {id: '3', name: 'Camping', type: 'Culture', location: 'Beja', price: 120, image:'https://t4.ftcdn.net/jpg/02/06/15/63/240_F_206156399_YKVMqWTkaU9YVCJkDQIKRu7OD3GuubqJ.jpg'},
            //{id: '4', name: 'Sushi Workshop', type: 'Culture', location: 'Marsa', price: 120, image:'https://t4.ftcdn.net/jpg/03/23/88/07/240_F_323880740_7dz5xQ3Jcimx84xWmV37U7lxYGSsvs4t.jpg'},
        ]
    const favouritesLodging= //[]
        [
            {id: '1', name: 'Movenpick Hotel', lodging: 'Hotel', location: 'Sousse', price: 120, image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg'},
            {id: '2', name: 'El Mouradi Hotel', lodging: 'Hotel', location: 'Mahdia', price: 130, image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg'},
            {id: '3', name: 'Dar Nour', lodging: 'Villa', location: 'Hammamet', price: 400, image:'https://t4.ftcdn.net/jpg/04/94/76/01/240_F_494760101_uDYrDBavlxK8P7OLf0tKzTqqWH6QHkcm.jpg'},
            {id: '4', name: 'Ville Verde', lodging: 'Guest House', location: 'Jbal Rsas', price: 300, image:'https://t3.ftcdn.net/jpg/01/26/79/46/240_F_126794631_74xvlIMAeOr1PlbYWp8IlZ1vsSGMYiLW.jpg'},
    ]


    const goToExperience = () => alert("Go to experience")
    const goToLodging = () => alert("Go to lodging")

    return(
        <Box>

            {/* Experiences */}
            <Box>
                <Box className="flex">
                    <img width={45}  src={experienceIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
                </Box>

                <Grid container justifyContent="left">
                    {
                        favouritesExperiences.length?
                        favouritesExperiences.map(item=>(
                            <Box key={item.id}>
                                <HostFavouritesExperienceItem onClick={goToExperience} data={item}/>
                            </Box>
                        )):
                            //If favourite experiences is empty show this
                            <Box className="arrayEmptyBox blueGradientText">
                                You don't have any favourite experiences yet,
                                {/* A link to experiences' list, opens in new tab */}
                                <a href='#' className="pinkGradientText" target="_blank"> check experiences!</a>
                            </Box>

                    }
                </Grid>
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Lodging */}
            <Box>
                <Box className="flex">
                    <img width={45}  src={lodgingIcon} alt="Lodging icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Lodgings</Box>
                </Box>

                <Grid container justifyContent="left">
                    {
                        favouritesLodging.length?
                        favouritesLodging.map(item=>(
                            <Box key={item.id}>
                                <HostFavouritesLodgingItem onClick={goToLodging} data={item}/>
                            </Box>
                        )):
                            //If favourite lodging is empty show this
                            <Box className="arrayEmptyBox blueGradientText">
                                You don't have any favourite lodgings yet,
                                {/* A link to lodgings' list, opens in new tab */}
                                <a href='#' className="pinkGradientText" target="_blank"> check lodgings!</a>
                            </Box>
                    }
                </Grid>
            </Box>



        </Box>
    )

}

export default HostFavourites;