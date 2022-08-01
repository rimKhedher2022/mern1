import React from "react";




//
import {Box} from "@mui/material";

//
import HostExperienceEditItem from "./HostExperienceEditItem";
import HostExperiencePendingItem from "./HostExperiencePendingItem";
import "../hostStyle.scss";


//IMG 
import plusIcon from '../../../../img/plusIcon.png'
import experienceIcon from '../../../../img/reservationExperienceIcon.png';


const HostMyExperiences =()=>{


    //Preset data
    const presetPendingExperiencesData=[
        {id: '1', name: 'Rtiba Forest Hiking', price: '80', location: 'Rtiba', startDateTime: '22/06/2022 12:00', endDateTime: '22/06/2022 18:00', tags: 'Nature Hiking',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {id: '2', name: 'Rtiba Forest Hiking', price: '80', location: 'Rtiba', startDateTime: '22/06/2022 12:00', endDateTime: '22/06/2022 18:00', tags: 'Nature Hiking',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    const presetEditExperiencesData=[
        {id: '1', name: 'Jbal Rsas Hiking', price: '120', location: 'Mornak', startDateTime: '25/06/2022 12:00', endDateTime: '27/06/2022 18:00', tags: 'Nature Hiking', image: 'https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]


    return (
        <Box>
            <Box className="flex">
                <img width={45}  src={experienceIcon} alt="Experience icon"/>
                <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
            </Box>

            {/* Pending experiences */}
            <Box className="mt-[50px] space-y-5">
                {
                    presetPendingExperiencesData.map(item=>(
                        <Box key={item.id}>
                            <HostExperiencePendingItem data={item}/>
                        </Box>
                    ))
                }

                {/* Add experience */}
                <Box className="hostAddExperienceBox">
                    <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                    <Box className="pinkGradientText hostAddExperienceText">Add an experience</Box>
                </Box>
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>


            {/* Edit/Delete experiences */}
            <Box>
                {
                    presetEditExperiencesData.map(item=>(
                        <Box key={item.id}>
                            <HostExperienceEditItem data={item}/>
                        </Box>
                    ))
                }
            </Box>

        </Box>
    )
}

export default HostMyExperiences;