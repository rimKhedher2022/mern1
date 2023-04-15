import React, {useEffect, useState} from "react";
import {Box, Button, Select, Stack, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import {SxProps} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {add} from "date-fns";
import {
    setReservationArrivalDateTransport,
    setReservationClientsCountTransport, setReservationCommentTransport,
    setReservationDepartureDateTransport
} from "../../../actions";
import ReservationTransportPopUp from "./ReservationTransportPopUp";
import ReservationChosenTransport from "./ReservationChosenTransport";


const ReservationTransport = () =>{

    //Styles
    const popperSx: SxProps={
        "& .MuiCalendarPicker-root": {// All background
           //backgroundColor: "rgb(241,5,48)",
        },
        "& .MuiPickersDay-dayWithMargin": {//All days
            color: "#F02F32",
            fontSize: "20px"
        },
        "& .MuiIcon-root": { //The year
        //    color: "rgb(8,232,12)",
        },
        "& .Mui-selected": { //Selected
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            color: "white",
        },
        "& .css-1dozdou": { //
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            marginTop: '0px',
            marginBottom: '0px',
            paddingTop: '8px',
            paddingBottom: '8px',
            maxHeight: '50px',
        },"& .MuiTypography-root": { //Days
            fontSize: "20px",
            color: "#F02F32",
        },"& .css-1v994a0": { // Month-year picked
            fontSize: "20px",
        },
        "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root": { //PM button
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //PM Text
            color: "white",
        },
        "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root": { //AM button
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //AM Text
            color: "white",
        },
        "& .css-12ha4i7": { //Time dot
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-7lip4c": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-a1rc6s": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-2ujp1m": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            border: "16px solid",
            borderImage: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)'
        },
        "& .css-118whkv": { //Circle
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            border: "16px solid",
            borderRadius: "30px",
        },
    }
    const dateTextFieldSx: SxProps={
        '& fieldset': {
            borderRadius: '12.6757px',
            boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        },
        '& svg':{
            color: "#E22357",
        }
        ,
        '& input':{
            height: '11px'
        }
    }
    const textFieldSx: SxProps={
        '& fieldset': {
            borderRadius: '12.6757px',
            boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
            height: "95.27px",
            width: "675px"
        }
        ,
    }
    const chooseButtonSx: SxProps={
        '&.MuiButton-contained':{
            fontWeight: '700',
            fontSize: '17px',
            textTransform: 'none',
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            WebkitBackgroundClip:'text',
            WebkitTextFillColor: 'transparent',
            border: "5px solid transparent",
            borderRadius: '10px',
            borderImage: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%) 1 round",
            WebkitMask:'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        },
    }

    // Reservation transport redux data
    const reduxData= useSelector(state => state.reservationConfirmedTransport)
    const dispatch = useDispatch()

    // Client select data
    const clientSelectItems= ['1 Client', '2 Clients', '3 Clients', '4 Clients', '5+ Clients']

    //Handlers
    const handleArrivalChange = (newDate) => dispatch(setReservationArrivalDateTransport(newDate))
    const handleDepartureChange = (newDate) => dispatch(setReservationDepartureDateTransport(newDate))
    const handleClientCountChange= (event)=> dispatch(setReservationClientsCountTransport(event.target.value))
    const handleCommentChange= (event)=> dispatch(setReservationCommentTransport(event.target.value))

    // Transport choosing modal state & handlers
    const [transportOpen, setTransportOpen]= useState(false);
    const handleTransportOpen= () => setTransportOpen(true)
    const handleTransportClose= () => setTransportOpen(false)

    // Set redux state clientsCount default
    useEffect(()=> {
        dispatch(setReservationClientsCountTransport(clientSelectItems[0]))
    }, [])

    return(
        <Box sx={{marginBottom: '100px'}}>
            <ReservationTransportPopUp
                open={transportOpen} handleClose={handleTransportClose}/>
            <form className=" space-y-3">
                <Box className="text-center" >
                    {
                        // If the uses already chose a transport => show it
                        reduxData.transport.id?
                            <Box className="mb-4">
                            <ReservationChosenTransport data={reduxData.transport} /><br/>
                            </Box>:
                            //Else show this
                            <label className="mr-5 text-lg">You can choose a transport</label>}

                    <Button variant="contained"
                            className="w-[120px] h-[50px]"
                            sx={chooseButtonSx}
                            onClick={handleTransportOpen}
                          >{reduxData.transport.id?'Change':'Choose'}</Button>
                </Box>
                <Box className="flex">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack className="">
                            {/* Arrival */}
                            <DateTimePicker
                                minDate={add(new Date(), {days:1})}
                                PopperProps={{sx:popperSx}}
                                onChange={handleArrivalChange}
                                value={reduxData.arrivalDate}
                                renderInput={(params)=><TextField className="w-[299px] relative" sx={dateTextFieldSx} {...params}/>} />
                        </Stack>
                        <Stack className="right-0 ml-20">
                            {/* Departure */}
                            <DateTimePicker minDate={add(reduxData.arrivalDate, {days: 1})} PopperProps={{sx:popperSx}}
                                            onChange={handleDepartureChange}
                                            value={reduxData.departureDate}
                                            renderInput={(params)=><TextField className="w-[299px]" sx={dateTextFieldSx} {...params}/>} />
                        </Stack>
                    </LocalizationProvider>
                </Box>

                <Box>
                    {/* Clients count */}
                    <Select  defaultValue={clientSelectItems[0]}
                             className="w-[299px] h-[44px]"
                             onChange={handleClientCountChange} sx={dateTextFieldSx}>
                        {clientSelectItems.map((item)=>(
                            <MenuItem className="" key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </Box>

                <Box className="pt-3">
                    {/* Comment */}
                    <TextField placeholder="Comment..." onChange={handleCommentChange} sx={textFieldSx}/>
                </Box>

            </form>
        </Box>
    )
}



export default ReservationTransport;