import React, { Fragment, useEffect } from 'react'


import Layout from '../shared/layout';
import Lodging from './Logdging';
import Loader from '../shared/Loader/loader'

import { useDispatch, useSelector } from 'react-redux'


import { getTraderLodgings } from '../../actions/lodgingActions'


//MUI IMPORTS
import Button from '@mui/material/Button'


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {  MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import './lodging.scss'

const AllLodgings = ({ match }) => {

  const color = "black"
  const colors = "#E42651"
  const options = ['1 Person', '2 Persons', '3-10 Persons', '10+ Persons'];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const dispatch = useDispatch();
  const { loading, lodgings } = useSelector(state => state.lodgings)



  useEffect(() => {
    dispatch(getTraderLodgings());
  }, [dispatch])



    return(
        <Layout>
        {loading ? <Loader /> : (
            <Fragment>
                <br />
                <br />
                <br />
                <br />
                <br />
               {/* <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
                    >
<div className='title' style={{marginTop:"3rem", display: "flex"}}>

        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment" style={{color:"black", marginLeft:"2rem",}}>
          Where ?
        </InputLabel>
        <Input
          sx={{
            width: 300,
            marginLeft:"2rem",
            svg: { color },
            input: { color },
            label: { color }
          }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        />
      </FormControl>

<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
				renderInput={(params) => {
					return (
					  <TextField
						{...params}
						sx={{
						  svg: { color },
						  input: { color },
						  label: { color },
              marginTop:"0.4rem",
              marginLeft:"2rem"
						}}
					  />
					);
				  }}
					label="When ?"
				/>
				</LocalizationProvider>
     

<Autocomplete
  id="size-small-standard"
  value={value}
  size="small"
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  inputValue={inputValue}
  onInputChange={(event, newInputValue) => {
    setInputValue(newInputValue);
  }}

  options={options}
  sx={{
    width: 300,
    marginLeft:"2rem",
    svg: { color },
    input: { color },
    label: { color }
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
          <PeopleIcon sx={{ color: "#E42651"}}/>
          </InputAdornment>
        )
      }}
      variant="standard"
      label="People ?"
      placeholder="People ?"
      style={{color:"black"}}
      sx={{
        svg: { colors },
        label:{ color },
      }}
    />
    )}
/>
<MenuItem>
<Button variant="contained" color='secondary'>
 <SearchIcon sx={{ color: "white"}} />
 </Button>
 </MenuItem>

</div>
</Grid>
   */}
                <br />

       <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
         <Grid container spacing={{ xs: 2, md: 5 }} style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}  >
         {lodgings.map(lodging => (
             <Lodging key={lodging._id} lodging={lodging} col={4} />
                          ))}
                </Grid>
                 </div>
                                    
                           
                             
            </Fragment>
        )}

    </Layout>
)
}

export default AllLodgings;