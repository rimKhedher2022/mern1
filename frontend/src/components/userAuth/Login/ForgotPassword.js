import React, { useState, useEffect } from 'react'


import MetaData from '../../shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../../actions/userActions'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (

        <React.Fragment>
<MetaData title={'Forgot Password'} />
      <CssBaseline />
      <Container maxWidth="sm" style={{marginTop:"8rem"}}>
      <Paper
      sx={{
        p: 2,
        marginTop: 8,
        maxWidth: 500,
        flexGrow: 1,
        marginBottom: 24,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
              <h2>Réinitialisez votre mot de passe :</h2>
            <Grid item xs component="form" onSubmit={submitHandler} >
            <TextField
                required
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              

            
              <br />
              <br />

          <Button variant="contained" color="secondary" type="submit" disabled={loading ? true : false} >Envoyer un e-mail</Button>

          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
      </Container>
    </React.Fragment>
          


    )
}

export default ForgotPassword