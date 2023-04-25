import * as React from 'react';

import TypeService from './typeService';
import Account from './Account';
import GeneralInformation from './generalInformation';
import DetailedInformation from './detailedInformation';
import Document from './Document';






import './becometrader.scss'

//MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';


import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';






const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <LooksOneIcon />,
    2: <LooksTwoIcon />,
    3: <Looks3Icon />,
    4: <Looks4Icon />,
    5: <Looks5Icon />,
  };


  return (
    
    <>
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  </>
  );
}



const steps = ['Type of service', 'Account' , 'General Information', 'Detailed information', 'Documents'];

function getStepContent(step, formValues = null, changeFormValue = null) {
  switch (step) {
    case 0:
      return <TypeService compteFormValues={formValues} changeCompteValue={changeFormValue} />;
    case 1:
      return <Account informationFormValues={formValues} changeInformationValue={changeFormValue}/>;
    case 2:
      return <GeneralInformation generalFormValues={formValues} changeGeneralValue={changeFormValue}/>;
    case 3:
      return <DetailedInformation compteFormValues={formValues} changeCompteValue={changeFormValue} 
      detailedFormValues={formValues} changeDetailedValue={changeFormValue}/>;
    case 4:
      return <Document compteFormValues={formValues} changeCompteValue={changeFormValue} 
      detailedFormValues={formValues} changeDetailedValue={changeFormValue}
        documentFormValues={formValues} changeDocumentValue={changeFormValue} 
        informationFormValues={formValues} changeInformationValue={changeFormValue}
        generalFormValues={formValues} changeGeneralValue={changeFormValue}
        />;
    default:
      throw new Error('Unknown step');
  }
}



const theme = createTheme({
  shape: {
    borderRadius: 40,
  },
}) 
const useStyles = makeStyles((theme) => ({
  typography: {
      color: 'black',
  },    
 
  root: {
    "& > *": {
      margin: theme.spacing(9),
      width: theme.spacing(500),
      height: theme.spacing(0)
    }
  },
  bluePaper: {
    background: "linear-gradient(270deg, #0C1424 100%, #143880 90%)",
  },
  text: {
    primary: "#000"
  }
}));

export default function TraderForm(props) {
  const classes = useStyles();
   
  const [compteFormValues, setCompteFormValues] = React.useState({});
  const [informationFormValues, setInformationFormValues] = React.useState({});
  const [generalFormValues, setChangeGeneralValue] = React.useState({});
  const [detailedFormValues, setChangeDetailedValue] = React.useState({});
  const [documentFormValues, setDocumentdValue] = React.useState({});



  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const changeCompteValue = (key, value) => {
    let values = { ...compteFormValues };
    values[key] = value;
    setCompteFormValues(values);
  };

  const changeInformationValue = (key, value) => {
    let values = { ...informationFormValues };
    values[key] = value;
    setInformationFormValues(values);
  };

  const changeGeneralValue = (key, value) => {
    let values = { ...generalFormValues };
    values[key] = value;
    setChangeGeneralValue(values);
  };

  const changeDetailedValue = (key, value) => {
    let values = { ...detailedFormValues };
    values[key] = value;
    setChangeDetailedValue(values);
  };
  const changeDocumentValue = (key, value) => {
    let values = { ...documentFormValues };
    values[key] = value;
    setDocumentdValue(values);
  };


  return (

    
    <React.Fragment>
        <head>
                <meta charset="UTF-8" />
                <title>Become a merchant on Livmo and offer unforgettable experiences</title>
                <meta name="description" content=""/>

                </head>
      <CssBaseline />
      <section className="hero is-fullheight">
      <div className={classes.root}>
      <Container component="main" >
        <Grid item style={{textAlign: "center" }} >
          <Typography component="h1" variant="h3" className={classes.typography}
           style={{
           fontWeight:700,
           fontSize:"42px",
           lineHeight:'42px',
           marginTop:'3rem',
           
        }} 
          align="center" >
         BECOME A MERCHANT
          </Typography>
          <br/>
        
          <Typography component="h1"
           variant="h6" 
           className={classes.typography}
            align="center"
            style={{
            fontWeight:700,
            fontSize:"20px",
            lineHeight:'20px',

            
         }}  >
          Hi! we will help you become a merchant.
          </Typography>
          <br />
          <React.Fragment>
      <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector />} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}><Typography style={{
                  color:"black"
         }} >{label}
         </Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
     
    
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom  style={{ color:"black" }}>
                  Thank you for your inscription.
                </Typography>
                <Typography variant="subtitle1" style={{ color:"black"}}>
                  Welcome To livmo ...
                </Typography>
                <br />
                <Button variant="contained" disableElevation style={{textTransform: 'none'}}>
                Creer une experience
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, compteFormValues,
                   changeCompteValue , informationFormValues, changeInformationValue,
                   generalFormValues,
                   changeGeneralValue,
                   detailedFormValues,
                   changeDetailedValue,
                   documentFormValues,
                   changeDocumentValue,)}
              
                <Box sx={{ display: 'flex', justifyContent: 'center' , marginTop:"-3rem" }}>
                <ThemeProvider theme={theme}>
              
                  {activeStep !== 0 && (
                    
                    <Button 
                
                    sx={{ mr: 100 }}
                    variant="outlined"
                    onClick={handleBack}
                    style={{textTransform: 'none', 
                    color:"#E22357", background: "white", border: '2px solid',width: '12%', height:'20%', }}>
                      Previous
                    </Button>
                  )}
                     
                     {activeStep === 0 && (
                    
                    <Button 
                
                    sx={{ mr: 100 }}
                    onClick={handleBack}
                    style={{width: '12%', height:'20%', }}>
                  
                    </Button>
                  )}
                  {activeStep !== steps.length - 1  && (
                     
                  <Button
                 
                    onClick={handleNext}
                    sx={{ mr: 9 }}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)",width: '12%', height:'20%'}}
                  >
                      Next
                  </Button>
                  )}
                 
                  </ThemeProvider>
                </Box>
 
              </React.Fragment>
         
            )}
          </React.Fragment>
          </Grid>
      </Container>
  </div>
  </section>
    </React.Fragment>
  );
}