import React, { useState, useEffect } from 'react'

import MetaData from '../../shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from "../../../actions/userActions";

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const NewPassword = ({ history, match }) => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated successfully')
            history.push('/')
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(match.params.token, formData))
    }

    return (
        <React.Fragment>
            <MetaData title={'New Password Reset'} />

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
                name="password"
                label="Mot de Passe"
                type="password"
                id="password_field"
                value={password}          
                onChange={(e) => setPassword(e.target.value)} 
              />
         <TextField
                required
                margin="normal"
                fullWidth
                name="password"
                label=" Confirmer Mot de Passe"
                type="password"
                id="confirm_password_field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
         
              

            
              <br />
              <br />

          <Button variant="contained" color="secondary" type="submit"  >Sauvegarder</Button>

          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
      </Container>
        </ React.Fragment>
    )
}

export default NewPassword