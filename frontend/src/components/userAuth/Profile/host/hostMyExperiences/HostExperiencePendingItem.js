import React from "react";

//
import {Box, Button} from "@mui/material";
//
import "../hostStyle.scss"
import muiButtonSx from "../MuiStyles";

const HostExperiencePendingItem = ({data}) =>{

    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-5 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.name}</Box>

                    {/* Tags (I used tags as string separated by spaces ' ') */}
                    <Box className="flex space-x-16">
                        {
                            data.tags.split(' ').map(tag=>(
                                <Box key={tag} className="pinkGradientBgWhiteText tagItem">{tag}</Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont" className="absolute right-0"> {data.startDateTime} - {data.endDateTime} </Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.location}</Box>
                    <Box className="absolute right-0"> <a className="importantItemTextFont detailsTextFont">Details</a> </Box>
                </Box>
            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox bg-[#0C1424] space-y-4">
                <Box className="itemsBoxRoundedBlueBoxTextFont">
                    Your request is being processed by the administrator
                </Box>
                {/* Delete Button */}
                <Box className="bg-white"
                     sx={{
                    width: '155px',
                    height: '44px',
                    boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
                    borderRadius: '20px',
                    marginLeft:'27%',

                    fontSize: '17px',
                    fontWeight: '700',}}>
                    <Button sx={muiButtonSx} className=" blueGradientText" >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Box>
    )

}

export default HostExperiencePendingItem;