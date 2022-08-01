import React, { useState, useEffect } from 'react'

import MetaData from '../../shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors }from "../../../actions/userActions";
import { UPDATE_PASSWORD_RESET } from '../../../constants/userConstants'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Layout from '../../shared/layout';

import './updateProfile.scss'



const UpdatePassword = ({ history }) => {

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Mot de passe mis à jour avec succès')

            history.push('/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);

        dispatch(updatePassword(formData))
    }

    return (



<React.Fragment>
  <Layout>
<MetaData title={'Change Password'} />
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
              <h2>Changer votre mot de passe :</h2>
            <Grid item xs component="form" onSubmit={submitHandler} >
            <TextField
                margin="normal"
                required
                type="password"
                fullWidth
                id="old_password_field"
                label="Ancien mot de passe"
                name="Old Password"
                autoFocus
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />

               <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="new_password_field"
                label="Nouveau mot de passe"
                name="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />

          <Button variant="contained" color="secondary" type="submit"> Changer le mot de passe</Button>

          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
      </Container>
      </Layout>
    </React.Fragment>
          

           

    )
}

export default UpdatePassword