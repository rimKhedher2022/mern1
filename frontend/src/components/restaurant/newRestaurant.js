import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


//MUI Imports
import { Container } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



import './restaurant.scss'
import { newRestaurant, clearErrors } from '../../actions/restaurantActions'
import { NEW_RESTAURANT_RESET } from '../../constants/restaurantConstants'







const NewRestaurant= () => {

  const useStyles = makeStyles((theme) => ({

    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(500),
        height: theme.spacing(0)
      }
    },
  
  }));
  
  const [restaurantName, setRestaurantName] = useState('');
  const [slogon, setSlogon] = useState('');
  const [price, setPrice] = useState(0);
  const [webSite, setWebSite] = useState('');
  const [descriptionPlat, setDescriptionPlat] = useState('');
  const [platName, setPlatName] = useState('');
  const [address, setAddress] = useState('');


  const [nbrFourchettes, setNbrFourchettes] = useState(1);
  const [restaurantType, setRestaurantType] = useState([]);
  const [restaurantSpecialty, setRestaurantSpecialty] = useState([]);

  
  const [description, setDescription] = useState('');
  const [namee, setNamee] = useState('');
  const [names, setNames] = useState('');


  const [imagesPlat, setImagesPlat] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [imagesMenu, setImagesMenu] = useState([]);
  const [imagesMenuPreview, setImagesMenuPreview] = useState([]);

  const [dayoff, setDayOff] = React.useState("");


  const [openingTime, setOpeningTime] = React.useState(null);
  const [closingTime, setClosingTime] = React.useState(null);

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newRestaurant);
    
  const handleChange = (event) => {
   setRestaurantType(event.target.value);
  };
  const handleChanging = (event) => {
    setRestaurantSpecialty(event.target.value);
   };


   const [checked, setChecked] = useState(false);
   const [checkedd, setCheckedd] = useState(false);
   const [checkeddd, setCheckeddd] = useState(false);
   const [check, setCheck] = useState(false);



   const Changing = () => {
    setCheckedd(true);
    setChecked(false);
    setCheckeddd(false);
    setCheck(false);


};

const Changin = () => {
  setCheckedd(false);
  setChecked(false);
  setCheck(false);
  setCheckeddd(true);

};

   const OnChanging = () => {
    setChecked(true);
    setCheck(false);
    setCheckedd(false);
    setCheckeddd(false);

};
const OnChangi = () => {
  setChecked(false);
  setCheck(true);
  setCheckedd(false);
  setCheckeddd(false);

};
const OnChangin = () => {
  setChecked(false);
  setCheck(false);
  setCheckedd(false);
  setCheckeddd(false);


};

      
  const onChange = e => {

    const files = Array.from(e.target.files)

    setImagesPreview([]);
    setImagesPlat([])

    files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(oldArray => [...oldArray, reader.result])
                setImagesPlat(oldArray => [...oldArray, reader.result])
            }
        }

        reader.readAsDataURL(file)
    })
    setNamee(e.target.files[0]);
}

const Change = e => {

  const files = Array.from(e.target.files)

  setImagesMenuPreview([]);
  setImagesMenu([])

  files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesMenuPreview(oldArrayy => [...oldArrayy, reader.result])
              setImagesMenu(oldArrayy => [...oldArrayy, reader.result])
          }
      }

      reader.readAsDataURL(file)
  })
  setNames(e.target.files[0]);
}

useEffect(() => {


  if (error) {
      alert.error(error);
      dispatch(clearErrors())
  }

  if (success) {  
    
      history.push('/')
      alert.success('Restaurant created successfully');
      dispatch({ type: NEW_RESTAURANT_RESET })
  }

}, [dispatch, alert, error, success, history])


const submitHandler = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.set('restaurantType', restaurantType);
  formData.set('restaurantSpecialty', restaurantSpecialty);
  formData.set('restaurantName', restaurantName);
  formData.set('platName', platName);
  formData.set('descriptionPlat', descriptionPlat);
  formData.set('price', price);
  imagesPlat.forEach(imagesPlat => {
    formData.append('imagesPlat', imagesPlat)
})
imagesMenu.forEach(imagesMenu => {
  formData.append('imagesMenu', imagesMenu)
})
  formData.set('slogon', slogon);
  formData.set('webSite', webSite);
  formData.set('address', address);


  formData.set('dayoff', dayoff);
  formData.set('openingTime', openingTime);
  formData.set('closingTime', closingTime);


  formData.set('nbrFourchettes', nbrFourchettes);
  formData.set('description', description);




  dispatch(newRestaurant(formData))
}

const classes = useStyles();
  return (
        <React.Fragment>
        <CssBaseline />
        <section className="hero is-fullheight restaurant" >
        <div className={classes.root}>
        <Container component="main">
        <Grid  style={{textAlign: "left" }}>

      <Typography     
      variant="h6"
      gutterBottom
      style={{
        fontWeight:700,
        fontSize:"42px",
        lineHeight:'42px',
        marginTop:'3rem',
        color:"white"
     }}>
    CREATE A Dish
      </Typography>
      <Grid container  component="form" onSubmit={submitHandler}   noValidate  spacing={3}>

          <Grid item xs={12} md={4}> 
      <FormControl fullWidth>
      <Typography  style={{ color:"white", textAlign: "left", }}>Type of restaurant</Typography> 
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={restaurantType}
          label="Type Restaurant"
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Type Restaurant</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Type Restaurant</em>
          </MenuItem>
          <MenuItem onClick={OnChanging} value={"Restaurant à thème"}>Restaurant à thème</MenuItem>
          <MenuItem onClick={Changing} value={"Fast Food"}>Fast Food</MenuItem>
          <MenuItem onClick={Changin} value={"Resto Bar"}>Resto Bar</MenuItem>
          <MenuItem onClick={OnChangin} value={"Les Bistros"}>Les Bistros</MenuItem>
          <MenuItem onClick={OnChangin} value={"Les Restaurants routiers"}>Les Restaurants routiers</MenuItem>
          <MenuItem onClick={OnChangi}  value={"Les Brasseries"}>Les Brasseries</MenuItem>
          <MenuItem onClick={Changin} value={"Les restaurants gastronomiques"}>Les restaurants gastronomiques</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    

    {
             checked ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Kafteji"}>Kafteji</MenuItem>
                  <MenuItem value={"Poulet"}>Poulet</MenuItem>
                  <MenuItem value={"Resto Bar"}>Grill</MenuItem>
                  <MenuItem value={"Poissons"}>Poissons</MenuItem>
                  <MenuItem value={"Pizzeria"}>Pizzeria</MenuItem>
                  <MenuItem value={"Végan"}>Végan</MenuItem>
                  <MenuItem value={"Chawarma"}>Chawarma</MenuItem>
                  <MenuItem value={"Ayari"}>Ayari</MenuItem>
                  <MenuItem value={"Leblebi"}>Leblebi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }

{
             checkedd ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging} 
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Hamburger"}>Hamburger</MenuItem>
                  <MenuItem value={"Sandwich"}>Sandwich</MenuItem>
                  <MenuItem value={"Tacos"}>Tacos</MenuItem>
                  <MenuItem value={"Poissons"}>Burrito</MenuItem>
                  <MenuItem value={"Fried Chicken"}>Fried Chicken</MenuItem>
                  <MenuItem value={"Noddle"}>Noddle</MenuItem>
                  <MenuItem value={"Chawarma"}>Chawarma</MenuItem>
                  <MenuItem value={"Sausage"}>Sausage</MenuItem>
                  <MenuItem value={"Pizza"}>Pizza</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }
            {
             checkeddd ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Exigences"}>Exigences</MenuItem>
                  <MenuItem value={"Cuisine"}>Cuisine</MenuItem>
                  <MenuItem value={"Menu"}>Menu</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }
            {
             check ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography>
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Avec boissons alcooliques"}>Avec boissons alcooliques</MenuItem>
                  <MenuItem value={"Sans boissons alcooliques"}>Sans boissons alcooliques</MenuItem>

                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }

	  <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Name:</Typography> 
	  <TextField
              required
              id="restaurantName"
              name="restaurantName"
              placeholder='Restaurant Name'
              fullWidth
              autoFocus
              variant="standard"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
 

      <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left", }}>Dish Name:</Typography> 
	  <TextField
              required
              id="platName"
              name="platName"
              placeholder='Dish Name'
              fullWidth
              autoFocus
              variant="standard"
              value={platName}
              onChange={(e) => setPlatName(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"white", textAlign: "left" }}>Dish Photos :</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={onChange}
                  multiple/>
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"white" }}>
                    {namee.name}
                    </span>
                </label>

                 {imagesPreview.map(img => (
                     <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                      ))}
                   </div>
                 </div>
              </Grid>
  <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Menu:</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={Change}
                  multiple/>
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"white" }}>
                    {names.name}
                    </span>
                </label>

      {imagesMenuPreview.map(imgs => (
        <img src={imgs} key={imgs} alt="Images Menu Preview" className="mt-3 mr-2" width="55" height="52" />
         ))}
  </div>
         </div>
  </Grid>
          <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left" }}>Dish Description:</Typography> 
       <TextareaAutosize
      
      aria-label="maximum height"
      placeholder="Dish Description"
      style={{ width: "100%", height:"60%", textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
      value={descriptionPlat}
      onChange={(e) => setDescriptionPlat(e.target.value)}

    />
  </Grid>

  <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left" }}>Price:</Typography> 
	  <TextField
              required
              id="price"
              name="price"
              placeholder='Price'
              type='number'
              fullWidth
              variant="standard"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}

            />
          </Grid>

    <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Slogon:</Typography>
	  <TextField
              required
              id="slogon"
              name="slogon"
              placeholder='Restaurant’s Slogan'
              fullWidth
              variant="standard"
              value={slogon}
              onChange={(e) => setSlogon(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>

       <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>webSite:</Typography>
	  <TextField
              required
              id="site web"
              name="site web"
              placeholder='Link to your Website'
              fullWidth
              autoFocus
              variant="standard"
              value={webSite}
              onChange={(e) => setWebSite(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}

            />
          </Grid>

          <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>Address:</Typography>
	  <TextField
              required
              id="address"
              name="address"
              placeholder='Restaurant’s Address'
              fullWidth
              autoFocus
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
          

          <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>Days Off:</Typography>
      <Autocomplete
        style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
        multiple
        id="tags-standard"			
          onChange={(event, newValue) => {
            setDayOff(newValue.map((v) => v.title));
          }}
        options={days}
        getOptionLabel={(option) => option.title}
        defaultValue={[days[6]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Days Off"
          />
        )}
      />
        </Grid>
        
 <Grid item xs={12} md={4}>
 <Typography  style={{ color:"white", textAlign: "left" }}>Open Hours:</Typography>


<div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
<LocalizationProvider  dateAdapter={AdapterDateFns}>
      <TimePicker
        value={openingTime}
        onChange={(newValue) => {
          setOpeningTime(newValue);
        }}
        renderInput={(params) => <TextField {...params}
        style={{backgroundColor:"white", borderRadius:'6.1568px' }}
        />}
      />
    </LocalizationProvider>

  <br/>
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={closingTime}
        onChange={(newValue) => {
          setClosingTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} 
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
          />}
      />
    </LocalizationProvider>
    </div>

</Grid>
<br/>
<Grid item xs={12} md={4}>
<Typography  style={{ color:"white", textAlign: "left" }}>Number of Stars:</Typography>
<Rating
        defaultValue={1} max={3}
        name="customized-10" 
        value={nbrFourchettes}
        onChange={(event, newValue) => {
          setNbrFourchettes(newValue);
        }}
      />
          </Grid>
<Grid item xs={12} >
<Typography  style={{ color:"white", textAlign: "left" }}>Restaurant Rules:</Typography>
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Restaurant Rules..."
      style={{ width: "65%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      value={description}
      onChange={(e) => setDescription(e.target.value)}


    />
</Grid>

<Grid item xs={12} style={{textAlign:"right"}}>
        <Button variant="contained"
		   color="secondary" 
      
       style={{textTransform: 'none',
        background: "white", color:"#DA1D6C", borderRadius:'18.5406px',
        width:"143.38px",
        height:"48.21px",
       }}
            >
			CANCEL 
		  </Button>
     <Button variant="contained"
       type='submit'
       style={{textTransform: 'none',
        background: "linear-gradient(#F02F32,#DA1D6C)",
        borderRadius:'18.5406px',
        color:'white',
        width:"143.38px",
        height:"48.21px",
         marginLeft:"3rem"}}
            >
			CONFIRM 
		  </Button>

      </Grid> 
      
     </Grid>
      
   </Grid>

   </Container>

   </div>
   
    </section>
    </React.Fragment>
  );
}

export default NewRestaurant


const days = [
  { title: 'Monday' },
  { title: 'Tuesday' },
  { title: 'Wednesday' },
  { title: 'Thursday' },
  { title: 'Friday' },
  { title: 'Saturday' },
  { title: 'Sunday' },

];