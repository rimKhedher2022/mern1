import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Layout from '../../shared/layout';


import MetaData from '../../shared/metaData'
import './updateProfile.scss'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../../constants/userConstants'



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const countries = [
    "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
    "Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Palestine",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];






const UpdateProfile = ({ history }) => {
    const [country, setCountry] = React.useState([]);

  
  
  function getStyles(name, country) {
    return {
      fontWeight:
        country.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
    // Validation
    const { register, handleSubmit, formState: {errors} } = useForm();
    const emailValidation = errors?.email ? errors.email.message : null;
	const fnameValidation = errors?.fname ? errors.fname.message : null;
	const lnameValidation = errors?.lname ? errors.lname.message : null;
	const countryValidation = errors?.country ? errors.country.message : null;

	const theme = useTheme();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated } = useSelector(state => state.user)


    

    useEffect(() => {

        if (user) {
            setFname(user.fname);
            setLname(user.lname);
            setCountry(user.country);
            setEmail(user.email);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully')
            dispatch(loadUser());

            history.push('/me')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated, user])

    const submitHandler = () => {

        const formData = new FormData();
        formData.set('fname', fname);
        formData.set('lname', lname);
        formData.set('country', country);
        formData.set('email', email);
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData))
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])

    }

    return (

        <React.Fragment>
			<Layout>
            <MetaData title={'Update Profile'} />
           <div style={{marginTop:"6rem", marginLeft:'30%'}}>
               <Grid xs={6}>         
        <Box component="form" onSubmit={handleSubmit(submitHandler)} noValidate  >
        <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="Nom"
                name="fname"
                autoFocus
				{...register("fname", {pattern: {
					value: /^[A-Za-z]+$/,
					message: 'seulement des characters' 
				  }})}
				{...register("fname", {
					minLength: {
					  value: 3,
					  message: 'Minimum 3 caractères' 
					}
				  })}
				  {...register("fname", {
					maxLength: {
					  value: 15,
					  message: 'Maximum 15 caractères' 
					}
				  })}
				  {...register("fname", {required: "Champ requis"})}
				  
					error={!!errors?.fname}
					helperText={fnameValidation}

					value={fname}
                    onChange={(e) => setFname(e.target.value)}

              />
           
				<TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Prénom"
                name="lname"
				{...register("lname", {pattern: {
					value: /^[A-Za-z]+$/,
					message: 'seulement des characters' 
				  }})}
				{...register("lname", {
					minLength: {
					  value: 3,
					  message: 'Minimum 3 caractères' 
					}
				  })}
				  {...register("lname", {
					maxLength: {
					  value: 15,
					  message: 'Maximum 15 caractères' 
					}
				  })}
				  {...register("lname", {required: "Champ requis"})}
				  
					error={!!errors?.lname}
					helperText={lnameValidation}
					value={lname}
                    onChange={(e) => setLname(e.target.value)} 

              />
            <div>
      <FormControl sx={{ width: "100%", marginTop: "1rem"}}>
        <InputLabel id="demo-multiple-name-label">Pays</InputLabel>
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
		  helperText= {countryValidation}
          input={<OutlinedInput label="Country" />}
          MenuProps={MenuProps}
		  
        >
          {countries.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, country, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <TextField
                margin="normal"
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                style={{marginTop:"1rem"}}
				{...register("email", {pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: 'Information invalide' 
				  }})}
				  {...register("email", {required: 'Champ requis',
				   
				  })}
				  error={!!errors?.email}
				  helperText={emailValidation}
				  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

                    <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                           
                                <div>
                                    <figure className='avatarr mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatarr Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChange}
                                    />
                                    
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                             
                                </div>
                   
                        </div>
                   <br />
                   <br />


          <Button variant="contained"
		   color="secondary" 
		   type="submit">
			Modifier votre compte 
		  </Button>
		  <br />
                   <br />
		  </Box>   
		  </Grid>
          </div>
		  </Layout>
        </React.Fragment>

    )
}

export default UpdateProfile